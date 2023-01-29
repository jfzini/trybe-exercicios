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

console.log(splitSentence('go trybe'));

