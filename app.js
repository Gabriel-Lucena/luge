require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./src/routes');

const connectToDatabase = require('./src/database/database');

connectToDatabase();

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`😳  Escutando na porta: http://localhost:${PORT} 😳`);
});
