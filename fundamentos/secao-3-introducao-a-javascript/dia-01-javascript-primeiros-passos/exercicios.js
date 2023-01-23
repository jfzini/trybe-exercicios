// EXERCÍCIO 1: 
// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
//Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 70;
const b = 100;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//EXERCÍCIO 2:
//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

const num1 = 14;
const num2 = 16;
const num3 = 17;

if (num1 > num2) {
  console.log(num1 + ' é maior que ' + num2);
} else if (num1 === num2) {
  console.log(num1 + ' é igual a ' + num2);
} else {
  console.log(num2 + ' é maior que ' + num1);
}

//EXERCÍCIO 3:
//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

if (num1 > num2 && num1 > num3) {
  console.log("O maior número é " + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("O maior número é " + num2);
} else if (num3 > num1 && num3 > num2) {
  console.log("O maior número é " + num3);
} else {
  console.log("Existe empate no primeiro lugar");
}

//EXERCÍCIO 4:
//Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

let positiveNegative = 13;

if (positiveNegative > 0) {
  console.log("positive");
} else if (positiveNegative < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

//EXERCÍCIO 5 (BÔNUS):
//Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

const x = -10;
const y = 30;
const z = 160;
let triangle;

if (x <= 0 || y <= 0 || z <= 0) {
  console.log('Número inválido, utilize apenas números positivos');
} else if ((x + y + z) !== 180) {
  triangle = false;
  console.log(triangle);
} else if ((x + y + z) === 180) {
  triangle = true;
  console.log(triangle);
}

//EXERCÍCIO 6:
//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

let chessPiece = 'RooK';
let lowerCase = chessPiece.toLowerCase();

switch (lowerCase) {
  case 'king':
    console.log('Move 1 square to any direction');
    break;
  case 'queen':
    console.log('Move n squares to any direction');
    break;
  case 'rook':
    console.log('Move n squares in a straight line forwards or sideways');
    break;
  case 'knight':
    console.log('Jump in any direction in an L-shape');
    break;
  case 'bishop':
    console.log('Move n squares on a diagonal');
    break;
  case 'pawn':
    console.log('Except for its first move, the pawn moves one square forward');
    break;
  default:
    console.log("'This piece doesn't exist' or was mistyped");
}

//EXERCÍCIO 7:
//Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let grade = 10;

if (grade < 0 || grade > 100) {
  console.log('Nota inserida inválida');
} else if (grade >= 90) {
  grade = 'A'
  console.log(grade);
} else if (grade >= 80) {
  grade = 'B'
  console.log(grade);
} else if (grade >= 70) {
  grade = 'C'
  console.log(grade);
} else if (grade >= 60) {
  grade = 'D'
  console.log(grade);
} else if (grade >= 50) {
  grade = 'E'
  console.log(grade);
} else if (grade < 50) {
  grade = 'F'
  console.log(grade);
} else {
  console.log('Esse tipo de matemática pode ser aplicada para solucionar o que existe dentro de um horizonte de eventos');
}

//EXERCÍCIO 8:
//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

const number1 = 5;
const number2 = 2;
const number3 = 2;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
  console.log('true');
} else {
  console.log('false');
}

//EXERCÍCIO 9:
//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
  console.log('true');
} else {
  console.log('false');
}

//EXERCÍCIO 10:
// Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);

const cost = 20;
const value = 30;
let profit = (value - (cost * 1.2)) * 1000;

if (cost < 0 || value < 0) {
  console.log("Número inválido");
} else if ((cost * 1.2) > value) {
  console.log("Esse produto é um péssimo investimento");
} else {
  console.log('O lucro de venda de mil unidades deste produto é de ' + profit);
}

// EXERCÍCIO 11:
//Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

const income = 1500;
const inss8 = (income * 0,08)
const inss9 = ()

let teste = (income - 1556,95) * 0.09

let teste2 = 1500 % 1556.94;
console.log(teste2);