// Write your DOM code here!

//get buttons from HTML - a.red, a.white, a.blue, a.yellow
const redBtn = document.querySelector('.red');
const h1Text = document.querySelector('h1');
const pText = document.querySelector('p');

redBtn.addEventListener('click', () => {
    document.body.classList.remove('white','blue','yellow');
    document.body.classList.toggle('red');
    if (document.body.classList.contains('red')) {
        h1Text.style.color = 'white';
        pText.style.color = 'white';
    } else {
        h1Text.style.color = 'black';
        pText.style.color = 'black';
    }
});

const whiteBtn = document.querySelector('.white');
whiteBtn.addEventListener('click', () => {
    document.body.classList.remove('red','blue','yellow');
    document.body.classList.toggle('white');
        h1Text.style.color = 'black';
        pText.style.color = 'black';
});

const blueBtn = document.querySelector('.blue');
blueBtn.addEventListener('click', () => {
    document.body.classList.remove('red','white','yellow');
    document.body.classList.toggle('blue');

    if (document.body.classList.contains('blue')) {
        h1Text.style.color = 'white';
        pText.style.color = 'white';
    } else {
        h1Text.style.color = 'black';
        pText.style.color = 'black';
    }
});

const yellowBtn = document.querySelector('.yellow');
yellowBtn.addEventListener('click', () => {
    document.body.classList.remove('red','blue','white');
    document.body.classList.toggle('yellow');

    if (document.body.classList.contains('yellow')) {
        h1Text.style.color = 'blue';
        pText.style.color = 'blue';
    } else {
        h1Text.style.color = 'black';
        pText.style.color = 'black';
    }
});