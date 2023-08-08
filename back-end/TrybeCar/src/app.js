const express = require('express');
const passengerRouter = require('./routes/passenger.routes');

const app = express();

app.use(express.json());

app.use('/passengers', passengerRouter);

module.exports = app;