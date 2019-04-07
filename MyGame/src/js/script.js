var themes = [theme1.title, theme2.title, theme3.title, theme4.title, theme5.title, theme6.title];

function compareRandom(a, b) {
  return Math.random() - 0.5;
};

themes.sort(compareRandom);


let titles = document.getElementsByClassName('game-item_title');
let row = document.getElementsByClassName('game-row');
let cell = document.getElementsByClassName('game-item_cell');
let playerScore = document.getElementById('playerScore');

for (var i = 0; i < titles.length; i++) {
	titles[i].textContent = themes[i];
}

for (var i = 0; i < cell.length; i++) {
	cell[i].onclick = function() {
		let point = this.textContent;
		point = parseInt(point);
		let result = prompt();
		if (true) {
			let playerScoreCurrent = playerScore.textContent;
			let playerScoreNumber = parseInt(playerScoreCurrent) + point;
			playerScore.textContent = playerScoreNumber;
		}
	}
}