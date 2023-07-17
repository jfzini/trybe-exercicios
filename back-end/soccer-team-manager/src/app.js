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
})

module.exports = app;