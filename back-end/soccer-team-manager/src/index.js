const readline = require('readline-sync');
const { randomUUID } = require('crypto');

const { readData, writeData } = require('./utils/fsUtils');

const STAFF_PATH = './data/staff.json';

const addNewEmployee = async () => {
  const id = randomUUID();
  const name = readline.question('What\'s the employee\'s name? ');
  const position = readline.question('What\'s the employee\'s position? ');
  const email = readline.question('What\'s the employee\'s email? ');
  const phone = readline.question('What\'s the employee\'s phone? ');
  const status = readline.question('What\'s the employee\'s status? ');
  writeData(STAFF_PATH, { id, name, position, email, phone, status });
};

addNewEmployee();