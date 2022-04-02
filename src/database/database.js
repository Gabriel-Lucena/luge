const mongoose = require("mongoose");

require("dotenv").config();

function conectarAoBanco() {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Conectado ao banco de dados!"));
}

module.exports = conectarAoBanco;
