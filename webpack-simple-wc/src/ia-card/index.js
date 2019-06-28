(function () {
	'use strict';
	const template = document.createElement('template');
	template.innerHTML = `<style>:host {display:block;box-shadow:0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);border-radius:0.5rem;max-width:24rem;} :host[hidden] {display:none;} :host > h1 {padding:16px;margin-bottom : 0;} :host > .card-body {border-top:1px solid #ccc;padding:1rem;}</style><h1></h1><div class="card-body"><slot></slot></div>`;

	class IACard extends HTMLElement {

		static get observedAttributes() {
			return ['title'];
		}

		constructor() {
			super();
			this.attachShadow({mode: 'open'});
			this.shadowRoot.appendChild(template.content.cloneNode(true));
			this._titleEl = this.shadowRoot.querySelector('h1');
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
})();