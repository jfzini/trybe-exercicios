const { randomUUID } = require('crypto');

const personelData = [
  {
    id: randomUUID(),
    name: 'João',
    age: 25,
    city: 'São Paulo',
    staff: true,
    position: 'Desenvolvedor'
  },
];

module.exports = personelData;