import { nanoid } from "nanoid";

const genButton = document.getElementById('gen-button');
const generatedPW = document.getElementById('pw');
genButton.addEventListener('click', () => generatedPW.innerHTML = nanoid());