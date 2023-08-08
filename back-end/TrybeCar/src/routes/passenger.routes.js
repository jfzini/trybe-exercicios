const express = require('express');
const { getAllPassengers } = require('../controllers/passenger.controller');

const passengerRouter = express.Router();

passengerRouter.get('/', getAllPassengers);

module.exports = passengerRouter;