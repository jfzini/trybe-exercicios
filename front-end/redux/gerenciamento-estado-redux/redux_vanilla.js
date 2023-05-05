const incBtn = document.querySelector('button');
const incText = document.querySelector('h2');

incBtn.addEventListener('click', () => {
  incText.innerHTML = Number(incText.innerHTML) + 1;
});
