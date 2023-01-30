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

const encode = (string) => {
  let encoded = '';
  for (const character of string) {
    if (character === 'a') {
      encoded = encoded + '1';
    } else if (character === 'e') {
      encoded = encoded + '2';
    } else if (character === 'i') {
      encoded = encoded + '3';
    } else if (character === 'o') {
      encoded = encoded + '4';
    } else if (character === 'u') {
      encoded = encoded + '5';
    } else {
      encoded = encoded + character;
    }
  }
  return encoded;
}

const decode = (string) => {
  let decoded = '';
  for (const character of string) {
    if (character === '1') {
      decoded = decoded + 'a';
    } else if (character === '2') {
      decoded = decoded + 'e';
    } else if (character === '3') {
      decoded = decoded + 'i';
    } else if (character === '4') {
      decoded = decoded + 'o';
    } else if (character === '5') {
      decoded = decoded + 'u';
    } else {
      decoded = decoded + character;
    }
  }
  return decoded;
}

console.log(decode('H4w 1r2 y45 t4d1y?'));

//REQUISITO 10:

const techList = (array, string) => {
  let objectArray = [];
  for (const skills of array.sort()) {
    objectArray.push({
      tech: skills,
      name: string
    })
  }
  return objectArray;
}
console.log(techList([''], 'Lucas'));

//BONUS 1:

const generatePhoneNumber = (numArray) => {
  if (numArray.length !== 11) {
    return 'Array com tamanho incorreto';
  }

  for (const number of numArray) {
    if (number < 0 || number > 9) {
      return 'Não é possível gerar um número de telefone com esses valores';
    }
  }

  for (const number of numArray) {
    let frequency = 0;
    for (const numberRepetition of numArray) {
      if (number === numberRepetition) {
        frequency += 1;
      }
    }
    if (frequency >= 3) {
      return 'Não é possível gerar um número de telefone com esses valores';
    }
  }

  let phoneNumber = '';
  for (const numIndex in numArray) {
    console.log(numIndex);
    if (numIndex === 0) {
      phoneNumber = '(' + numArray[0];
    } else if (numIndex === 1) {
      phoneNumber = phoneNumber + numArray[1] + ') ';
    } else if (numIndex === 6) {
      phoneNumber = phoneNumber + numArray[6] + '-';
    } else {
      phoneNumber = phoneNumber + numArray[numIndex];
    }
  }
return phoneNumber;
}

console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]));
