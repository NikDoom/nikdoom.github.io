const humburger = document.getElementById('hamburger-icon');
const circle = document.getElementById('circle');
const svgCircle = document.getElementById('container-svg_circle');
const login = document.getElementById('login');

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const season = document.getElementById('season');

function activeMenu() {
 this.classList.toggle('active');
 svgCircle.classList.toggle('active-circle');
 login.classList.toggle('shown');
};

function changeSeasonLeft() {
	if (season.textContent == 'Summer') {
		season.innerText = 'Spring';
	}
	else if (season.textContent == 'Spring') {
		season.innerText = 'Autumn';
	}
	else if(season.textContent == 'Autumn') {
		season.innerText = 'Summer';
	}
};
function changeSeasonRight() {
	if (season.textContent == 'Summer') {
		season.innerText = 'Autumn';
	}
	else if (season.textContent == 'Spring') {
		season.innerText = 'Summer';
	}
	else if (season.textContent == 'Autumn') {
		season.innerText = 'Spring';
	}
}

humburger.addEventListener('click', activeMenu);
arrowLeft.addEventListener('click', changeSeasonLeft);
arrowRight.addEventListener('click', changeSeasonRight);