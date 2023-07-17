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

app.patch('/update/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = { id, ...req.body };

  try {
    await updateData(STAFF_PATH, updatedData);
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = { id, ...req.body };

  try {
    await updateData(STAFF_PATH, updatedData);
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await deleteData(STAFF_PATH, id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = app;