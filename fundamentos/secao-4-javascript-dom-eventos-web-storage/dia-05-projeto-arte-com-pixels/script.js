window.onload = () => {
  secondPalette.style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'))[0];
  thirdPalette.style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'))[1];;
  fourthPalette.style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'))[2];;
};

/* #==========# manipulating the color palette #==========#*/
const firstPalette = document.querySelector('.color');
const secondPalette = firstPalette.nextElementSibling;
const thirdPalette = secondPalette.nextElementSibling;
const fourthPalette = thirdPalette.nextElementSibling;

firstPalette.style.backgroundColor = 'black';
secondPalette.style.backgroundColor = 'green';
thirdPalette.style.backgroundColor = 'cyan';
fourthPalette.style.backgroundColor = 'orange'

/* #==========# botão randomizar cores #==========#*/
const $button = document.getElementById('button-random-color');

const randomColor = () => {
  secondPalette.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  thirdPalette.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  fourthPalette.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  storeRGB();
}

$button.addEventListener('click', randomColor);

const storeRGB = () => {
  const colorPalette = [secondPalette.style.backgroundColor, thirdPalette.style.backgroundColor, fourthPalette.style.backgroundColor,]
  
  localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
}
