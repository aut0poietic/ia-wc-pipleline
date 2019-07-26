import style from './index.css';
import html from './index.html';
const template = document.createElement('template');
template.innerHTML = `<style>${style}</style>${html}`;

class IACarouselSlide extends HTMLElement {

	static get observedAttributes() {
		return ['name', 'src', 'alt', 'type', 'number'];
	}

	get type() {
		var type = this.getAttribute('type').toLowerCase();
		if (type === 'tabpanel') {
			return type;
		} else {
			return 'group';
		}
	}

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		this._header = this.shadowRoot.querySelector('.slide-header');
		this._slide = this.shadowRoot.querySelector('.slide');
	}

	connectedCallback() {

	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue === newValue) {
			return;
		}
		if (name === 'name') {
			this.shadowRoot.querySelector('.slide-title').innerText = newValue;
		}
		if (name === 'src') {
			this.shadowRoot.querySelector('.slide').style.backgroundImage = `url(${newValue})`;
			this.shadowRoot.querySelector('.slide-header').style.backgroundImage = `url(${newValue})`;
		}
		if (name === 'alt') {
			this.shadowRoot.querySelector('.alt').innerText = newValue;
		}
		if (name === 'type') {
			this._slide.setAttribute('role', this.type);
		}
		if (name === 'number') {
			this._header.querySelector('.slide-number').innerText = newValue.toString().padStart(2, '0');
		}
	}
}

customElements.define('ia-carousel-slide', IACarouselSlide);
