// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
// Some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
  soma = soma + numbers[indexNumbers];
}
console.log(soma);

// Calcule e imprima a média aritmética dos valores contidos no array;

let media = soma / numbers.length;
console.log(media);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (media > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor ou igual a 20');
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
  if (maiorValor < numbers[indexNumbers]) {
    maiorValor = numbers[indexNumbers]
  }
}

console.log(maiorValor);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let impares = [];

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
  if (numbers[indexNumbers] % 2 !== 0) {
    impares.push(numbers[indexNumbers])
  }
}

if (impares.length >= 1) {
  console.log('foram encontrados ' + impares.length + ' valores ímpares');
} else {
  console.log('nenhum valor ímpar encontrado');
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;


let menorValor = maiorValor;

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
  if (menorValor > numbers[indexNumbers]) {
    menorValor = numbers[indexNumbers]
  }
}

console.log(menorValor);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let ate25 = [];

for (let index = 1; index <= 25; index += 1) {
  ate25.push(index);  
}

console.log(ate25);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let indexDivisao = 0; indexDivisao < ate25.length; indexDivisao += 1) {
  console.log(ate25[indexDivisao] / 2);
}

// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbersArray = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let firstIndex = 1; firstIndex < numbersArray.length; firstIndex += 1) {
  for (let secondIndex = 0; secondIndex < firstIndex; secondIndex += 1) {
    if (numbersArray[firstIndex] < numbersArray[secondIndex]) {
      let position = numbersArray[firstIndex];
      numbersArray[firstIndex] = numbersArray[secondIndex];
      numbersArray[secondIndex] = position;
    }
  }
}
console.log(numbersArray);

// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 


let multArray = [];
let secondIndex = 1;
for (let firstIndex = 0; firstIndex < numbersArray.length; firstIndex += 1) {
  if (firstIndex === (numbersArray.length - 1)) {
    multArray.push(numbersArray[firstIndex] * 2)
    } else {
    multArray.push(numbersArray[firstIndex] * numbersArray[secondIndex])
    secondIndex = secondIndex + 1;
    }
}

  console.log(multArray);


  let sum = 0;

  for (let indexSoma = 1; indexSoma <= 100; indexSoma += 1) {
    sum = sum + indexSoma;
  }
 