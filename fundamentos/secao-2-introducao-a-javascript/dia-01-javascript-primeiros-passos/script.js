const myName = 'João Felipe';
const birthCity = 'Montes Claros';
let birthYear = 1994;

birthYear = 2030;


const base = 5;
const height = 8;
const area = base * height;
const perimeter = 2 * (base + height);


const grade = 56;
let results = null;

if (grade >= 80) {
  results = 'Parabéns, você faz parte do grupo das pessoas aprovadas!';
}
else if (grade >= 60){
  results = 'Você está na nossa lista de espera';
}
else {
  results = 'Infelizmente, você reprovou.';
}



const currentHour = 15;
let message = '';

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
}
else if (currentHour >= 18) {
  message = 'Rango da noite, vamos jantar :D';
}
else if (currentHour >= 14) {
  message = 'Vamos fazer um bolo pro café da tarde?';
}
else if (currentHour >= 11){
  message = 'Hora do almoço!!!';
}
else if (currentHour > 4 && currentHour < 11) {
  message = 'Hmmm, cheiro de café recém-passado'
}

console.log(message);
