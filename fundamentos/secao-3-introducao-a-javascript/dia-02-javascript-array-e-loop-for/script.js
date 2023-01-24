let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'a', 'b', 'c', 'd'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList.indexOf('b'));

// EXERCÍCIO 1:
//Obtenha o valor “Serviços” do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//EXERCÍCIO 2:
//Procure o índice do valor “Portfólio” do array menu:

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio); 

//EXERCÍCIO 3:
//Adicione o valor “Contato” no final do array menu:

menu.push('Contato');

console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}

for (const items of groceryList) {
  console.log('hoje temos: ' + items);
}