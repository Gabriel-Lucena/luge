const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const userController = require('./controller/UserController');
app.use('/', userController);

const taskController = require('./controller/TaskController');
app.use('/', taskController);

app.listen(3000, () => {
  console.log('Server listening on port: http://localhost:3000');
});