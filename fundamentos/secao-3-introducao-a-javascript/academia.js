// Marina 27 anos
// Silvia 18
// Iza 63

let ageMarina = 38;
let ageSilvia = 38;
let ageIza = 37;

if (ageMarina > ageSilvia && ageMarina > ageIza) {
  console.log('Marina é a pessoa mais velha e possui ' + ageMarina + ' anos de idade');
} else if (ageSilvia > ageMarina && ageSilvia > ageIza) {
  console.log('Silvia é a pessoa mais velha e possui ' + ageSilvia + ' anos de idade');
} else if (ageIza > ageMarina && ageIza > ageSilvia) {
  console.log('Iza é a pessoa mais velha e possui ' + ageIza + ' anos de idade');
} else {
  console.log('Existe empate entre as pessoas mais velhas');
}

// EXERCICIO 2

let age = 28;
let sex = 'M';
let weight = 72;
let height = 172;
let calculoTMB = 0;

if (sex === 'M') {
  calculoTMB = ((height * 6.25) + (weight * 9.99) - (age * 4.92) + 5)
} else if (sex === 'F') {
  calculoTMB = ((height * 6.25) + (weight * 9.99) - (age * 4.92) - 161)
} else {
  console.log('Erro')
}

console.log('A taxa metabólica basal é: ' + calculoTMB + ' Kcal');

//EXERCÍCIO 3

menuOption = 0;

switch (menuOption) {
  case 1:
    console.log('1 - Trybe Lanche Feliz');
    break;
  case 2:
    console.log('2 - McTrybe');
    break;
  case 3:
    console.log('3 - TrybeWooper');
    break;
  case 4:
    console.log('4 - XTrybe');
    break;
  case 5:
    console.log('5 - Triplo Trybe com JS');
    break;
  default:
    console.log('Ainda não possuímos esta opção');
    break;
}