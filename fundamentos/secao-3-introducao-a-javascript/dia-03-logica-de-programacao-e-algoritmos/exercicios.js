//Crie um algoritmo que imprima na tela o fatorial de 10.

let number = 10;
let fatorial = 1;
for (let index = 2; index <= number; index += 1) {
  fatorial = fatorial * index;  
}
console.log(fatorial);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverse = '';

for (index = (word.length -1); index >= 0; index -= 1) {
  reverse += word[index];
}

console.log(reverse)


// Considere o array de strings abaixo.
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
let menorPalavra = '';

for (let indexMaior = 0; indexMaior < array.length; indexMaior += 1) {
  if (array[indexMaior].length > maiorPalavra.length) {
    maiorPalavra = array[indexMaior];
  }  
}
for (let indexMenor = 0; indexMenor < array.length; indexMenor += 1) {
  if (array[indexMenor].length < maiorPalavra.length)
    menorPalavra = array[indexMenor];
} 
console.log('A maior palavra do array é: ' + maiorPalavra);
console.log('A menor palavra do array é: ' + menorPalavra);

// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;
let asteriscos = '';

for (let indexAsterisco = 0; indexAsterisco < n; indexAsterisco += 1) {
  asteriscos += '*';
}
for (let indexQuadradoRepeticao = 0; indexQuadradoRepeticao < asteriscos.length; indexQuadradoRepeticao += 1) {
  console.log(asteriscos);
}

// //Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

for (let indexAsterisco = 0; indexAsterisco < n; indexAsterisco += 1) {
  asteriscos += '*';
  console.log(asteriscos);
}

// Agora inverta o lado do triângulo.

let espaco = n;

for (let indexAsterisco = 0; indexAsterisco < n; indexAsterisco += 1) {
  for (let indexEspaco = 0; indexEspaco < n; indexEspaco += 1) {
    if (indexEspaco < espaco) {
    asteriscos += ' ';
    } else {
      asteriscos += '*';
    }
  }
  console.log(asteriscos);
}

console.log(asteriscos.length);





// ==============================================================================================================================================================//





// console.log(asteriscos.length);
// for (let reversePyramid = asteriscos.length -1; reversePyramid >= 0; reversePyramid -= 1) {
//   asteriscos[reversePyramid] = '*'
//   console.log(asteriscos);
// }


// let teste = '               ';
// teste[5] = '*'
// console.log(teste);


/*1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
A soma total de 1 a 50 é:*/

let soma = 0;

for (index = 1; index <= 50; index += 1) {
  soma += index;
}

console.log('A soma total de 1 a 50 é: ' + soma); 


/*2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
Caso a quantidade seja igual a 50, exiba uma mensagem secreta.*/

let divisiveis3 = [];

for (let index = 2; index <= 150; index += 1){
  if (index % 3 === 0) {
    divisiveis3.push(index);
  }
}
if (divisiveis3.length === 50) {
  console.log('Mensagem secreta');
}


/*3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
"Player 1 won" ou "A Ties" ou "Player 2 won". */

let player1 = [1]; //Não deu tempo, galere, segue o baile


/*4- Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
Bônus: Crie a condição utilizando operador ternário.*/

let age = 19;

if (age >= 18) {
  console.log('A pessoa é maior de idade');
} else {
  console.log('A pessoa é menor de idade');
}


/*5 - Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
"Pessoa" é a mais nova.*/

let Carolzita = 26;
let Flavio = 30;
let Noel = 41;

if (Carolzita > Noel && Carolzita > Flavio) {
  console.log('Carolzita é a mais velhas');
} else if (Flavio > Noel && Flavio > Carolzita) {
  console.log('Flavio é o mais velho');
} else if (Noel > Carolzita && Noel > Flavio) {
  console.log('Noel é o mais velho');
} else {
  console.log('Há empate entre os mais velhos');
}


