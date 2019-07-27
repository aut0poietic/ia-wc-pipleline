import style from './index.css';
import html from './index.html';
const template = document.createElement('template');
template.innerHTML = `<style>${style}</style>${html}`;

const keys = {
	end  : 35,
	home : 36,
	left : 37,
	right: 39
};

class IACarousel extends HTMLElement {
	static get observedAttributes() {
		return ['buttons', 'navigation', 'index'];
	}

	get buttons() {
		return this.hasAttribute('buttons');
	}

	get navigation() {
		return this.hasAttribute('navigation');
	}

	get index() {
		return parseInt(this.getAttribute('index'), 10);
	}

	set index(value) {
		this.setAttribute('index', value);
	}

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		// The attributeChangedCallback is called before connected callback
		// when the wc has default attributes, so the tablist must have a value early.
		this._tablist = this.shadowRoot.querySelector('[role="tablist"]');
		this._next = this.shadowRoot.querySelector('.nav-btn.next');
		this._prev = this.shadowRoot.querySelector('.nav-btn.prev');
	}

	connectedCallback() {
		// The inner `.carousel` element should contain the aria roles/props/states.
		// so I remove or transfer the properties.
		if (this.hasAttribute('role')) {
			this.shadowRoot.querySelector('.carousel').setAttribute('role', this.getAttribute('role'));
			this.removeAttribute('role');
		}
		this.removeAttribute('aria-roledescription');
		// In order to function, this carousel needs a default index.
		if (!this.hasAttribute('index')) {
			this.setAttribute('index', 0);
		}
		this.shadowRoot.querySelector('slot').addEventListener('slotchange', this.onSlotChanged.bind(this));
		this._tablist.addEventListener('keydown', this.tablist_onKeyDown.bind(this));
		this._tablist.addEventListener('keyup', this.tablist_onKeyUp.bind(this));
		this._tablist.addEventListener('click', this.tablist_click.bind(this));
		this._next.addEventListener('click', this.next_click.bind(this));
		this._prev.addEventListener('click', this.prev_click.bind(this));
	}

	tablist_onKeyDown(e) {
		var key = e.keyCode;
		switch (key) {
			case keys.end:
				event.preventDefault();
				// Activate last tab
				this.index = tabs.length - 1;
				break;
			case keys.home:
				event.preventDefault();
				// Activate first tab
				this.index = 0;
				break;
		}
	}

	tablist_onKeyUp(e) {
		var key = e.keyCode;
		switch (key) {
			case keys.left:
				this.prev_click(e);
				break;
			case keys.right:
				this.next_click(e);
				break;
		}
	}

	tablist_click(e) {
		if (e.target.tagName.toLowerCase() === 'button') {
			var tabs = Array.prototype.slice.call(this._tablist.children);
			this.index = tabs.indexOf(e.target);
		}
	}

	next_click(e) {
		e.preventDefault();
		this.index = Math.min(this._slides.length - 1, Math.max(0, this.index + 1));
	}

	prev_click(e) {
		e.preventDefault();
		this.index = Math.min(this._slides.length - 1, Math.max(0, this.index - 1));
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue === newValue) {
			return;
		}
		if (name === 'buttons') {
			if (this.buttons) {
				this._tablist.removeAttribute('hidden');
			} else {
				this._tablist.setAttribute('hidden', true);
			}
			var lChildren = this.shadowRoot.querySelector('slot').assignedElements();
			for (var i = 0; i < lChildren.length; i++) {
				lChildren[i].setAttribute('type', (this.buttons ? 'tabpanel' : 'group'))
			}
		}
		if (name === 'navigation') {
			var buttons = this.shadowRoot.querySelectorAll('.nav-btn');
			console.log(buttons)
			for (var i = 0; i < buttons.length; i++) {
				if (this.navigation) {
					buttons[i].removeAttribute('hidden');
				} else {
					buttons[i].setAttribute('hidden', true);
				}
			}
		}
		if (name === 'index') {
			this.handleIndexChange(oldValue);
		}
	}

	handleIndexChange(oldIndex) {
		if (!this._slides) {
			return;
		}
		var tabs = this._tablist.querySelectorAll('button');
		var tabHasFocus = this._tablist.querySelector('button:focus') !== null;
		for (var i = 0; i < this._slides.length; i++) {
			this._slides[i].classList.remove('above', 'below', 'anim');
			if (i !== this.index) {
				this._slides[i].setAttribute('hidden', true);
				this._slides[i].classList.add(i > this.index ? 'below' : 'above');
				tabs[i].setAttribute('tabindex', -1);
				tabs[i].setAttribute('aria-selected', "false");
			}
		}
		if (oldIndex && this._slides[oldIndex]) {
			this._slides[oldIndex].classList.add('anim');
		}
		this._slides[this.index].classList.add('anim');
		this._slides[this.index].removeAttribute('hidden');
		tabs[this.index].setAttribute('tabindex', 0);
		tabs[this.index].setAttribute('aria-selected', "true");
		if (tabHasFocus) {
			tabs[this.index].focus();
		}
		if (this.index == 0) {
			this._prev.setAttribute('disabled', true);
		} else {
			this._prev.removeAttribute('disabled');
		}
		if (this.index == this._slides.length - 1) {
			this._next.setAttribute('disabled', true);
		} else {
			this._next.removeAttribute('disabled');
		}
	}

	onSlotChanged() {
		this._slides = this.shadowRoot.querySelector('slot').assignedElements();
		this._tablist.innerHTML = '';
		for (var i = 0; i < this._slides.length; i++) {
			var id = "panel-" + i;
			this._slides[i].setAttribute('aria-label', `slide ${i + 1} of ${this._slides.length}`);
			this._slides[i].setAttribute('number', i + 1);
			if (this._slides[i].hasAttribute('id')) {
				id = this._slides[i].getAttribute('id');
			} else {
				this._slides[i].setAttribute('id', id);
			}
			this._tablist.appendChild(this._initButton(this._slides[i].getAttribute('name'), id));
		}
		this.handleIndexChange();
	}

	_initButton(name, controls) {
		var bullet = document.createElement('button');
		bullet.setAttribute('type', 'button');
		bullet.setAttribute('role', 'tab');
		bullet.setAttribute('aria-controls', controls);
		var span = document.createElement('span');
		span.innerText = name;
		bullet.appendChild(span);
		return bullet;
	}
}

customElements.define('ia-carousel', IACarousel);
