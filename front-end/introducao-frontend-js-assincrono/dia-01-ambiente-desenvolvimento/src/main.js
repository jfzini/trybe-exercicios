import { nanoid } from "nanoid";
import clipboardCopy from "clipboard-copy";
import './style.css';

const genButton = document.getElementById('gen-button');
const generatedPW = document.getElementById('pw');
genButton.addEventListener('click', () => generatedPW.innerHTML = nanoid());
genButton.addEventListener('click', () => clipboardCopy(generatedPW.innerHTML));