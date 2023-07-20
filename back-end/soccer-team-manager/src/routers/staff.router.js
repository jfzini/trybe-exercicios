const express = require('express');
const { randomUUID } = require('crypto');
const { readData, addNewData, deleteData, updateData } = require('../utils/fsUtils');

// middlewares
const staffRouter = express.Router();
const { validateUUID, validatePostFields } = require('../middlewares/staff.middlewares');

// constants
const STAFF_PATH = './data/staff.json';

staffRouter.get('/', async (_req, res) => {
  const staffData = await readData(STAFF_PATH);
  res.status(200).json(staffData);
});

staffRouter.post('/', validatePostFields, async (req, res) => {
  const id = randomUUID();
  const newEmployee = { id, ...req.body };

  try {
    await addNewData(STAFF_PATH, newEmployee);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

staffRouter.use(validateUUID);

staffRouter.get('/:id', async (req, res) => {
  const staffData = await readData(STAFF_PATH);
  const { id } = req.params;
  const foundEmployee = staffData.find((employee) => employee.id === id);
  if (!foundEmployee) return res.status(404).json({ message: 'Funcionário não encontrado' });
  res.status(200).json(foundEmployee);
});

staffRouter.patch('/:id', async (req, res) => {
  updateData(req, res, STAFF_PATH);
});

staffRouter.put('/:id', async (req, res) => {
  updateData(req, res, STAFF_PATH);
});

staffRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await deleteData(STAFF_PATH, id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = staffRouter;