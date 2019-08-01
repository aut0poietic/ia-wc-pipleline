import style from './index.css';
import html from './index.html';
const template = document.createElement('template');
template.innerHTML = `<style>${style}</style>${html}`;

class IADijkstra extends HTMLElement {
	static get observedAttributes() {
		return ['size', 'character-x', 'character-y', 'movement', 'zoom'];
	}

	get movement() {
		return parseInt(this.getAttribute('movement'), 10);
	}

	get characterX() {
		return parseInt(this.getAttribute('character-x'), 10);
	}

	get characterY() {
		return parseInt(this.getAttribute('character-y'), 10);
	}

	get size() {
		return parseInt(this.getAttribute('size'));
	}


	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this._grid = this.shadowRoot.querySelector('.grid');
		this._cells = [];
		this._showing = false;
	}

	connectedCallback() {
		this.initGrid(this.size);
		this._grid.addEventListener('click', this.grid_onClick.bind(this));
		this.resetGrid();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue === newValue) {
			return;
		}
		if (name === 'size') {
			this.resetGrid();
		}
		if (name === 'zoom') {
			this.shadowRoot.querySelector('.perspective').style.transform = `scale(${newValue})`
		}
	}

	grid_onClick(e) {
		if (this._showing) {
			if (e.target.classList.contains('moveable')) {
				this.setAttribute('character-x', e.target.getAttribute('x'));
				this.setAttribute('character-y', e.target.getAttribute('y'));
				this.resetGrid();
				this._showing = false;
			}
		} else if (this.characterX == parseInt(e.target.getAttribute('x')) && this.characterY == parseInt(e.target.getAttribute('y'))) {
			this._showing = true;
			this.showGridMovement(this.getMovementArea());
		}
	}


	resetGrid() {
		var characterCell = this.shadowRoot.querySelector('.character');
		if (characterCell) {
			characterCell.classList.remove('character');
		}
		var cells = this.shadowRoot.querySelectorAll('.moveable');
		if (cells) {
			cells.forEach(cell => cell.classList.remove('moveable'));
		}
		if (this._cells[this.characterX] && this._cells[this.characterX][this.characterY]) {
			this._cells[this.characterX][this.characterY].el.classList.add('character');
		}
	}


	showGridMovement(cells) {
		cells.forEach(cell => {
			cell.el.classList.add('moveable');
		})
	}


	initGrid(size) {
		let gridSize = size * 50;
		this._grid.style.width = gridSize + 'px';
		this._grid.style.height = gridSize + 'px';

		for (let x = 0; x < size; x++) {
			if (!this._cells[x]) {
				this._cells[x] = [];
			}
			for (let y = 0; y < size; y++) {
				this._cells[x][y] = this.createCell(x, y);
				this._grid.appendChild(this._cells[x][y].el);
			}
		}
	}

	createCell(x, y) {
		let el = document.createElement('div');
		el.classList.add('cell');
		el.style.left = x * 50 + 'px';
		el.style.top = y * 50 + 'px';
		el.setAttribute('x', x);
		el.setAttribute('y', y);
		let cost = Math.floor(Math.random() * (3 - 1)) + 1;
		el.setAttribute('cost', cost);
		return {el, x, y, cost, value: -1};
	}

	// These are helpers for the dijkstra
	getAdjacent(cell) {
		let adjacent = [];

		if (cell.x + 1 < this.size) {
			adjacent.push(this._cells[cell.x + 1][cell.y]);
		}
		if (cell.y + 1 < this.size) {
			adjacent.push(this._cells[cell.x][cell.y + 1]);
		}
		if (cell.x - 1 >= 0) {
			adjacent.push(this._cells[cell.x - 1][cell.y]);
		}
		if (cell.y - 1 >= 0) {
			adjacent.push(this._cells[cell.x][cell.y - 1]);
		}

		return adjacent;
	}

	resetGridValues() {
		for (let x = 0; x < this.size; x++) {
			for (let y = 0; y < this.size; y++) {
				this._cells[x][y].value = -1;
			}
		}
		this._cells[this.characterX][this.characterY].value = 0;
	}

	// Here begins the dijkstra implementation
	getMovementArea() {
		this.resetGridValues();
		let selected = [];
		let origin = this._cells[this.characterX][this.characterY];
		let locationCost = 0;
		let open = [origin];
		while (open.length > 0) {
			let current = open.pop();
			let adjacent = this.getAdjacent(current);
			for (let i = 0; i < adjacent.length; i++) {
				let adj = adjacent[i];
				locationCost = current.value + adj.cost;
				if (adj.value === -1 || locationCost < adj.value) {
					adj.value = locationCost;
					if (open.indexOf(adj) === -1) {
						open.push(adj);
					}
				}
				if (locationCost <= this.movement && selected.indexOf(adj) === -1) {
					selected.push(adj);
				}
			}
		}
		return selected;
	}


}

customElements.define('ia-dijkstra', IADijkstra);