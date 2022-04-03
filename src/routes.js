const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');

routes.get('/', (request, response) => {
  response.send('Olá');
});

routes.get('/user/', UserController.getAll);
routes.post('/user/create/', UserController.create);
routes.post('/user/', UserController.login);

routes.post('/task/', TaskController.create);
routes.get('/task/:idUser/', TaskController.getAllById);

module.exports = routes;
