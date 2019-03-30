var form = document.querySelector('#form');
var btn = document.querySelector('#btn');
function show(){
    form.classList.toggle('js-show')
}

btn.addEventListener('click', show);
