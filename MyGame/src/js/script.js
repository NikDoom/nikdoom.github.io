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
		var answerHide = document.createElement('i');
		answerHide.className = 'hiden-answer';
		var a = rowCells[i][k];
		a.appendChild(span);
		a.appendChild(answerHide);
		span.textContent = themes[i].quest[k-1];
		answerHide.textContent = themes[i].answer[k-1];
	}
}

function getFinal() {
	let playerNameText = playerName.textContent;
	let playerScoreText = playerScore.textContent;
	wrap.style.display = "none";
	final.style.display = "flex";
	finalTitle.textContent = 'Game over. ' + playerNameText + ', your final score is ' + playerScoreText;
}

for (let i = 0; i < cells.length; i++) {
	cells[i].onclick = function() {
		let point = this.textContent;
		point = parseInt(point);
		let playerScoreNumber;
		let playerScoreCurrent = playerScore.textContent;
		let result = prompt(this.getElementsByClassName('hiden-quest')[0].textContent);
		cells[i].classList.add("wasted");
		if ( result == this.getElementsByClassName('hiden-answer')[0].textContent) {
			playerScoreNumber = parseInt(playerScoreCurrent) + point;
			playerScore.textContent = playerScoreNumber;
			cells[i].classList.add("wasted__green");
		} else {
			playerScoreNumber = parseInt(playerScoreCurrent) - point;
			playerScore.textContent = playerScoreNumber;
			cells[i].classList.add("wasted__red");
		}
		var arrCells = Object.values(cells);
		var wastedArr = arrCells.filter(function(item) {
			return item.classList.contains('wasted');
		});
		function endGame() {
			if (wastedArr.length == arrCells.length) {
				console.log('endGame');
				getFinal();
			}
		}
		endGame();
	}
}