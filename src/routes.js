const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/', (request, response) => {
  response.send('Olá');
});

routes.get('/user/', UserController.getAll);
routes.post('/user/create/', UserController.create);

module.exports = routes;
