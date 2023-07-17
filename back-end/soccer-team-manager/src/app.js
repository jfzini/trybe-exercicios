// dependencies
const express = require('express');
const { randomUUID } = require('crypto');

// internal files/functions
const { readData, addNewData, updateData } = require('./utils/fsUtils');

// constants
const STAFF_PATH = './data/staff.json';

// API configuration
const app = express();
app.use(express.json());

app.get('/', (_req, res) => res.status(200).sendFile(__dirname + '/index.html'));

app.get('/staff', async (_req, res) => {
  const staffData = await readData(STAFF_PATH);
  res.status(200).json(staffData);
});

app.post('/add', async (req, res) => {
  const { name, position, email, phone, status } = req.body;
  const id = randomUUID();
  const newEmployee = { id, name, position, email, phone, status };
  try {
    await addNewData(STAFF_PATH, newEmployee);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name, position, email, phone, status } = req.body;
  const updatedData = { id, name, position, email, phone, status };

  try {
    await updateData(STAFF_PATH, updatedData);
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});


// app.get('/logout', (req, res) => res.status(200).json({ message: 'Tchau, mundo!!' }));
// app.get('/error', (req, res) => res.status(403).json({ message: 'Tá proibido, mundo!!' }));
// app.post('/add', (req, res) => {
//   const { name, age, city, staff, position } = req.body;
//   const id = randomUUID();
//   const newPerson = { id, name, age, city, staff, position };
//   personelData.push(newPerson);
//   res.status(201).json(newPerson);
// });

// app.put('/update/:id', (req, res) => {
//   const { id } = req.params;
//   const { name, age, city, staff, position } = req.body;
//   const personIndex = personelData.findIndex((person) => person.id === id);
//   if (personIndex === -1) return res.status(404).json({ message: 'Pessoa não encontrada' });
//   const newPerson = { id, name, age, city, staff, position };
//   personelData[personIndex] = newPerson;
//   res.status(200).json(newPerson);
// });

// app.patch('/update-name/:id', (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   const personIndex = personelData.findIndex((person) => person.id === id);
//   if (personIndex === -1) return res.status(404).json({ message: 'Pessoa não encontrada' });
//   personelData[personIndex].name = name;
//   res.status(200).json(personelData[personIndex]);
// });

// app.delete('/delete/:id', (req, res) => {
//   const { id } = req.params;
//   const personIndex = personelData.findIndex((person) => person.id === id);
//   if (personIndex === -1) return res.status(404).json({ message: 'Pessoa não encontrada' });
//   personelData.splice(personIndex, 1);
//   res.status(204).end();
// });

module.exports = app;