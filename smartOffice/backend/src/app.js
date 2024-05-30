// src/app.js
const express = require('express');
const cors = require('cors');
const { stockRouter, servicesRouter } = require('./routes/index');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/stock', stockRouter);
app.use('/services', servicesRouter);

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

module.exports = app;