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

//REQUISITO 6:

const calcTriangleArea = (base, height) => base * height / 2;

const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  if (form === 'retângulo') {
    return 'O valor da área do retângulo é de: ' + calcRectangleArea(base, height) + '.';
  } else if (form === 'triângulo'){
    return 'O valor da área do triângulo é de: ' + calcTriangleArea(base, height) + '.';
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida.'
}

console.log(calcAllAreas(4,8,'retângulo'));

//REQUISITO 7:

const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'Invalid';
}

console.log(catAndMouse(5,2,8));

//REQUISITO 8:

const fizzBuzz = (numArray) => {
  const stringArray = [];
  for (const number of numArray) {
    if (number % 3 === 0 && number % 5 === 0) {
      stringArray.push('fizzBuzz');
    } else if (number % 3 === 0) {
      stringArray.push('fizz');
    } else if (number % 5 === 0) {
      stringArray.push('buzz');
    } else {
      stringArray.push('bug!');
    }
  }
  return stringArray;
}

console.log(fizzBuzz([9, 25]));

//REQUISITO 9:


