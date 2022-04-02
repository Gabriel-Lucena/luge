require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const connectToDatabase = require("./database/database");

connectToDatabase();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Escutando na porta: http://localhost:${PORT}`);
});
