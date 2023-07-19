// dependencies
const express = require('express');
const { randomUUID } = require('crypto');

// internal files/functions
const { readData, addNewData, updateData, deleteData } = require('./utils/fsUtils');

// constants
const STAFF_PATH = './data/staff.json';

// API configuration
const app = express();
app.use(express.json());

app.get('/', (_req, res) => res.status(200).sendFile(`${__dirname}/index.html`));

app.get('/staff', async (_req, res) => {
  const staffData = await readData(STAFF_PATH);
  res.status(200).json(staffData);
});

app.get('/staff/:id', async (req, res) => {
  const staffData = await readData(STAFF_PATH);
  const { id } = req.params;
  const foundEmployee = staffData.find((employee) => employee.id === id);
  if (!foundEmployee) return res.status(404).json({ message: 'Funcionário não encontrado' });
  res.status(200).json(foundEmployee);
});

app.post('/staff', async (req, res) => {
  try {
    const { name, position, email, phone, status } = req.body;
    if (!name || !position || !email || !phone || !status) {
      throw new Error('Todos os campos são obrigatórios');
    }
    const id = randomUUID();
    const newEmployee = { id, name, position, email, phone, status };
    await addNewData(STAFF_PATH, newEmployee);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.patch('/staff/:id', async (req, res) => {
  updateData(req, res, STAFF_PATH);
});

app.put('/staff/:id', async (req, res) => {
  updateData(req, res, STAFF_PATH);
});

app.delete('/staff/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await deleteData(STAFF_PATH, id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = app;