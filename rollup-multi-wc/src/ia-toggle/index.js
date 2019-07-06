import style from './index.css';
const template = document.createElement('template');
template.innerHTML = `
	<style>${style}</style>
	<div aria-labelledby="toggle-label" class="toggle-button" tabindex="0" role="checkbox" aria-checked="false"></div>
	<div id="toggle-label" class="toggle-label" ></div>
`;

class IAToggle extends HTMLElement {

	static get observedAttributes() {
		return ['label', "checked"];
	}

	constructor() {
		var self = super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this._label = this.shadowRoot.querySelector(".toggle-label");
		this._button = this.shadowRoot.querySelector(".toggle-button");
		this.onClick = this.onClick.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);
		return self;
	}

	onClick(e) {
		e.preventDefault();
		this.checked = !this.checked;
	}

	onKeyPress(e) {
		if (e.key.toLowerCase() === ' ' || e.key.toLowerCase() === 'space') {
			e.preventDefault();
			this.checked = !this.checked;
		}
	}

	connectedCallback() {
		this.addEventListener('click', this.onClick);
		this._button.addEventListener('keypress', this.onKeyPress);
		this._button.classList.add('ani');
	}

	disconnectedCallback() {
		this.removeEventListener('click', this.onClick);
		this._button.removeEventListener('keypress', this.onKeyPress);
	}

	get checked() {
		return this._button.getAttribute('aria-checked') === 'true';
	}

	set checked(value) {
		if (value === 'true' || value === true) {
			this.setAttribute('checked', true);
		} else {
			this.removeAttribute('checked');
		}
		this.dispatchEvent(new Event('change'));
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'label') {
			this._label.innerText = newValue;
		}
		if (name == 'checked') {
			this._button.setAttribute( 'aria-checked', this.hasAttribute('checked'));
		}
	}
}

customElements.define('ia-toggle', IAToggle);
