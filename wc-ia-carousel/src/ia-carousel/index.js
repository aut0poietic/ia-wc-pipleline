import style from './index.css';
import html from './index.html';
const template = document.createElement('template');
template.innerHTML = `<style>${style}</style>${html}`;

class IACarousel extends HTMLElement {
	static get observedAttributes() {
		return ['buttons', 'navigation'];
	}

	get buttons() {
		return this.hasAttribute('buttons');
	}

	get navigation() {
		return this.hasAttribute('navigation');
	}

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this._tablist = this.shadowRoot.querySelector('.bullets');
	}

	connectedCallback() {
		if (!this.hasAttribute('role')) {
			this.shadowRoot.querySelector('.carousel').setAttribute('role', this.getAttribute('role'));
			this.removeAttribute('role');
		}
		// this should override any page specified value.
		this.removeAttribute('aria-roledescription');

		console.log(this.shadowRoot.querySelector('slot').assignedElements());
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue === newValue) {
			return;
		}
		if (name == 'buttons') {
			console.log('hey buttons.');
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
		if (name == 'navigation') {
			var buttons = this.shadowRoot.querySelectorAll('button');
			for (var i = 0; i < buttons.length; i++) {
				if (this.navigation) {
					buttons[i].removeAttribute('hidden');
				} else {
					buttons[i].setAttribute('hidden', true);
				}
			}
		}
	}
}

customElements.define('ia-carousel', IACarousel);
