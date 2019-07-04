import {
	LitElement,
	html,
	css,
	unsafeCSS
} from 'lit-element';

import styles from './index.css';

class IACard extends LitElement {
	static get properties() {
		return {
			title: { type: String, reflect: true }
		};
	}

	static get styles(){
		return css`${unsafeCSS(styles)}`;
	}

	render() {
		//language=HTML
		return html`<h1>${this.title}</h1><div class="card-body"><slot></slot></div>`;
	}
}
customElements.define('ia-card', IACard);