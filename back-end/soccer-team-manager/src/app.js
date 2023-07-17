const express = require('express');
const personelData = require('./data');
const { randomUUID } = require('crypto');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json(personelData));
app.get('/logout', (req, res) => res.status(200).json({message: 'Tchau, mundo!!'}));
app.get('/error', (req, res) => res.status(403).json({message: 'Tá proibido, mundo!!'}));
app.post('/add', (req, res) => {
  const { name, age, city, staff, position } = req.body;
  const id = randomUUID();
  const newPerson = { id, name, age, city, staff, position };
  personelData.push(newPerson);
  res.status(201).json(newPerson);
});

app.use(express.text());
app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, city, staff, position } = req.body;
  const personIndex = personelData.findIndex((person) => person.id === id);
  if (personIndex === -1) return res.status(404).json({ message: 'Pessoa não encontrada' });
  const newPerson = { id, name, age, city, staff, position };
  personelData[personIndex] = newPerson;
  res.status(200).json(newPerson);
});

module.exports = app;