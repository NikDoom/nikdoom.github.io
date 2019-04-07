var themes = ["тема 1", "тема 2", "тема 3", "тема 4", "тема 5", "тема 6"];

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

themes.sort(compareRandom);

console.log(themes);

let titles = document.getElementsByClassName('game-item_title');

titles[0].textContent = themes[0];
titles[1].textContent = themes[1];
titles[2].textContent = themes[2];
titles[3].textContent = themes[3];