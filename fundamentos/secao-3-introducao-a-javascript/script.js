//Acessar as chaves de um objeto:

let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
};

console.log(diasDaSemana['1']); // domingo

let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4


let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']); // Nova Iorque


/*===============================================EXERCÍCIOS DE FIXAÇÃO==================================================*/

/*Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };*/

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
}

/*Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.*/

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');

/*Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.*/

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player);

/*Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.*/

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes');

/*Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.*/

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (people in names) {
  console.log('Olá, ' + names[people]);
}

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let info in car) {
  console.log(info + ': ' + car[info]);
}

/*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/
  
function soma(a, b) {
  return console.log (a + b);
}

function sub(a, b) {
  return console.log(a - b);
} 

function mult(a, b) {
  return console.log(a * b);
}

function div(a, b) {
  return console.log(a / b);
}

function mod(a, b) {
  return console.log(a % b);
}

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function comp(number1, number2) {
  if (number1 > number2) {
    return console.log(number1 + ' é maior que ' + number2);
  } else if (number2 > number1) {
    return console.log(number2 + ' é maior que ' + number1);
  } else {
    return console.log(number1 + ' é igual a ' + number2);
  }
}

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function comp3(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return console.log(num1 + ' é o maior número');
  } else if (num2 > num1 && num2 > num3) {
    return console.log(num2 + ' é o maior número');
  } else if (num3 > num2 && num3 > num1) {
    return console.log(num3 + ' é o maior número');
  } else {
    return console.log('Há empate entre os maiores números');  
  }
}

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function positiveNegative(random) {
  if (random > 0) {
    return console.log('positive');
  } else if (random < 0) {
    return console.log('negative');
  } else {
    return console.log('zero');
  }
}

/*Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.*/

function triangle(x, z, y) {
  if (x <= 0 || z <= 0 || y <= 0) {
    return console.log('Dados inválidos');
  } else if ((x + y + z) === 180) {
    return console.log('É possível formar um triângulo com ângulos internos de ' + x + ', ' + z + ' e ' + y);
  } else {
    return console.log('Não é possível formar um triângulo com ângulos internos de ' + x + ', ' + z + ' e ' + y);
  }
}

// EXERCÍCIO FIXAÇÃO PASSADO PELA CARTOLZITA NO SLACK

let top = {
  fullName: {
		firstName: 'João',
		surname: 'Zini',
	},
	corFavorita: 'preto', //e branco também, vai.
	bandaFavorita: 'Slipknot', //pois é	
	cantoraFavorita: 'Lady Gaga', //pois é
	jogoFavorito: 'WoW',
}

for (const key in top) {
  console.log(top.fullName.firstName);
}
