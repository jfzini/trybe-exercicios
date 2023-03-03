const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((element, index) => {
  pessoasAprovadas[index] = element.toUpperCase();
});
console.log(pessoasAprovadas);

const numbers = [19, 21, 30, 3, 45, 22, 15];

console.log(numbers.find((number) => (number % 3 === 0 && number % 5 === 0)));

const name = ['João', 'Irene', 'Fernando', 'Maria'];

console.log(names.find((name) => name.length === 5));

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

console.log(musicas.find((musica) => musica.id === '31031685'));

const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');

console.log(verificaCargo); 

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames));
console.log(verifyFirstLetter('X', listNames));

const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade.toUpperCase() === 'APROVADO');

console.log(verifyGrades);


const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((invited) => invited === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minAge) => {
  return arr.every((pplAge) => pplAge.age >= minAge);
}

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));