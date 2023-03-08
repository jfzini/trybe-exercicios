const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
// console.log(Math.max(...randomNumbers));
/* o spread de um array não é um array em si, é apenas a coleção dos valores.
Por isso, para o Math funcionar, é necessário que faça o spread do array em vez de chamá-lo diretamente */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['amora', 'morango', 'maracujá', 'kiwi', 'mirtilo'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite fresco', 'chantilly', 'suspiro'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

const countParams = (...args) => {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas



const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfos = {...user, ...jobInfos};

console.log(Object.entries(userInfos));

const {
  name: userName,
  age,
  nationality,
  profession,
  squad,
  squadInitials,
} = userInfos;

console.log(`Hi, my name is ${userName}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);


const x = [1,2,3];
const y = [4,5,6];

const z = [...x, ...y]

console.log(z);

const {
  name,
  city,
  superpowers,
} = darkKnight;