var themes = [theme1, theme2, theme3, theme4, theme5, theme6];

function compareRandom(a, b) {
  return Math.random() - 0.5;
};

themes.sort(compareRandom);

let titles = document.getElementsByClassName('game-item_title');
let rows = document.getElementsByClassName('game-row');
let cells = document.getElementsByClassName('game-item_cell');
let playerScore = document.getElementById('playerScore');
var rowCells = [];

for (let i = 0; i < titles.length; i++) {
	titles[i].textContent = themes[i].title;
	rowCells[i] = rows[i].cells;
	for (let k = 1; k < rowCells[i].length; k++) {
		var span = document.createElement('span');
		span.className = "hiden-quest";
		var a = rowCells[i][k];
		a.appendChild(span);
		span.textContent = themes[i].quest[k-1];
	}
}

console.log(rowCells);

for (let i = 0; i < cells.length; i++) {
	cells[i].onclick = function() {
		let point = this.textContent;
		point = parseInt(point);
		let result = prompt(this.getElementsByClassName('hiden-quest')[0].textContent);
		if (true) {
			let playerScoreCurrent = playerScore.textContent;
			let playerScoreNumber = parseInt(playerScoreCurrent) + point;
			playerScore.textContent = playerScoreNumber;
		}
	}
}