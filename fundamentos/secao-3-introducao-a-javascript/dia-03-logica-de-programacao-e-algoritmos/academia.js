// A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
// Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.
// Use a seguinte estrutura na impressão:
// "x, y, z, ...n"
let impares = []
for (let index = 1; index <= 50; index += 2) {
  impares.push(' ' + index);
}
console.log(impares.toString());



// Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo deve receber antes de criar essa sequência, o valor inicial e final.
// Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:
// Se houver 50 ou mais:
// "Há 50 ou mais números divisíveis por 3"
// Caso o contrário: "Sequência muito pequena."

let divisiveisPorTres = [];

for (numero = 1; numero <= 1000; numero += 2) {
  if (numero % 3 === 0) {
    divisiveisPorTres.push(numero);
  }
}

if (divisiveisPorTres.length >= 50) {
  console.log('Há 50 ou mais números divisíveis por 3')
} else {
  console.log('Sequência muito pequena');
}