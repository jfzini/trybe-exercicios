// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura



let objeto = {
  area: 0,
  perimetro: 0,
};

const calcularArea = (base, altura) => {
  if (typeof base !== 'number' || typeof altura !== 'number') {
    return 'Comando inválido';
  }
  objeto.area = base * altura;
  objeto.perimetro = (base + altura) * 2;
  return objeto;
}

console.log(calcularArea(5, 4));

// Exercício 2 - Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e ímpares no formato:

let numeros = {
  pares: 0,
  ímpares: 0,
};



// Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.
// Dica: Use o split.

// valor de teste: ‘trybe’ e ‘be’
// valor esperado no retorno da função: true
// verificaFimPalavra(‘trybe’, ‘be’);
// Retorno esperado: true
// verificaFimPalavra(‘joaofernando’, ‘fernan’);
// Retorno esperado: false;

function verificaParImpar(arrayNumbers){ 
  const numeros = {
    pares: 0,
    ímpares: 0,
    };
  
  for(let index of arrayNumbers){
    if(index % 2 === 0){
      numeros.pares += 1;
    } else {
    numeros.ímpares += 1;
    }
  }
  return numeros;
}

console.log(verificaParImpar([1,2,3,6,4,5,98,8,98,9895,8,987,548,59])) 
