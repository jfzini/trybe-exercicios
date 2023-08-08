const express = require('express');
const { getAllPassengers, getPassengerById } = require('../controllers/passenger.controller');

const passengerRouter = express.Router();

passengerRouter.get('/', getAllPassengers);

passengerRouter.get('/:id', getPassengerById);

module.exports = passengerRouter;