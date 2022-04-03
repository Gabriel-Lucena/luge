const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.get("/", (request, response) => {
  response.send("Olá");
});

routes.get("/user", UserController.index);


module.exports = routes;
