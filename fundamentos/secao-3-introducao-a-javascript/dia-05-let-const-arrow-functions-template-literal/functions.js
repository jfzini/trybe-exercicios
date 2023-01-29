// COMEÇANDO ALGUNS REQUISITOS DO PROJETO//

// REQUISITO 1:

const girafa = true;
const elefante = false;
const macaco = false;


const compareTrue = (param1, param2) => {
  if (param1 == true && param2 == true) {
    return true;
  } else if (param1 == true && param2 == false) {
    return false;
  } else if (param2 == true && param1 == false) {
    return false;
  } else if (param1 == false && param2 == false) {
    return false;
  }
  return 'Invalid';
}

console.log(compareTrue(macaco, elefante));

// REQUISITO 2:

const splitSentence = (string) => {
  if (typeof string == 'string') {
    const resultado = string.split(' ');
    return resultado;
  }
  return 'Invalid';
}

console.log(splitSentence('FOGUETE'));

// REQUISITO 3:

const concatName = (array) => array[array.length - 1] + ', ' + array[0];

console.log(concatName(['captain', 'my', 'captain']));

//REQUISITO 4:

const footballPoints = (wins, ties) =>  wins * 3 + ties;

console.log(footballPoints(0,0));

//REQUISITO 5:

const highestCount = (numArray) => {
  let highestNumber = numArray[0];
  let highestNumberTimes = 0;
  for (const number of numArray) {
    if (number > highestNumber) {
      highestNumber = number;
    }
  };
  for (const number of numArray) {
    if (number === highestNumber) {
      highestNumberTimes += 1;
    }
  };
  return highestNumberTimes;
}

console.log(highestCount([0,0,0]));

