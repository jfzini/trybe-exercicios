const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).json({message: 'Olá, mundo!!'}));
app.get('/logout', (req, res) => res.status(200).json({message: 'Tchau, mundo!!'}));
app.get('/error', (req, res) => res.status(403).json({message: 'Tá proibido, mundo!!'}));

module.exports = app;