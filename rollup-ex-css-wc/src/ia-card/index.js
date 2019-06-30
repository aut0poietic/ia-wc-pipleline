import style from './index.css';
const template = document.createElement('template');
template.innerHTML = `<style>${style}</style><h1></h1><div class="card-body"><slot></slot></div>`;

class IACard extends HTMLElement {

	static get observedAttributes() {
		return ['title'];
	}

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this._titleEl = this.shadowRoot.querySelector("h1");
	}

	connectedCallback() {
		if (!this.hasAttribute('role')) {
			this.setAttribute('role', 'complementary');
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'title') {
			this._titleEl.innerText = newValue;
		}
	}
}

customElements.define('ia-card', IACard);
