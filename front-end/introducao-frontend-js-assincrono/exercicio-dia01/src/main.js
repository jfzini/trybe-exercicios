import validator from 'validator';

const toCheck = document.querySelector('input');
const seletor = document.querySelector('#validate');
const button = document.getElementById('val-button');
const resultado = document.querySelector('#resultado');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const options = {
    email: validator.isEmail(toCheck.value),
    cpf: validator.isTaxID(toCheck.value,'pt-BR'),
    cep: validator.isPostalCode(toCheck.value,'BR'),
    phone: validator.isMobilePhone(toCheck.value,'pt-BR'),
    hex: validator.isHexColor(toCheck.value),
  };
  if (options[seletor.value]) {
    return resultado.innerHTML = `O ${seletor.value} inserido é válido`;
  }
  return resultado.innerHTML = `O ${seletor.value} inserido é inválido`;
});
