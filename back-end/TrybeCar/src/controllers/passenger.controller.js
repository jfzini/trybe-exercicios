const { passengerModel } = require('../models');

const getAllPassengers = async (_req, res) => {
  const passengers = await passengerModel.findAll();
  res.status(200).json(passengers);
};

module.exports = { getAllPassengers };