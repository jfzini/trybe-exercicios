const express = require('express');
const staffRouter = require('./routers/staff.router');

// API configuration
const app = express();
app.use(express.json());
app.get('/', (_req, res) => res.status(200).sendFile(`${__dirname}/index.html`));
app.use('/staff', staffRouter);

module.exports = app;