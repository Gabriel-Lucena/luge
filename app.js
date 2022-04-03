require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const routes = require("./src/routes");

const connectToDatabase = require("./src/database/database");

connectToDatabase();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(routes);

// app.listen(PORT, () => {
//   console.log(`Escutando na porta: http://localhost:${PORT}`);
// });

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
