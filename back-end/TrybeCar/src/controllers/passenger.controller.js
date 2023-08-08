const { passengerModel } = require('../models');
const { findById } = require('../models/passenger.model');

const getAllPassengers = async (_req, res) => {
  const passengers = await passengerModel.findAll();
  res.status(200).json(passengers);
};

const getPassengerById = async (req, res) => {
  const { id } = req.params;
  const passenger = await findById(id);
  if (!passenger) return res.status(404).json({ message: 'Passenger not found' });
  res.status(200).json(passenger);
};

module.exports = { getAllPassengers, getPassengerById };