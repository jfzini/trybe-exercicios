const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const previne = (e) => {
  if (e.key !== 'a') {
    e.preventDefault()
  }
}

HREF_LINK.addEventListener('click', previne);
INPUT_CHECKBOX.addEventListener('click', previne);
INPUT_TEXT.addEventListener('keypress', previne);