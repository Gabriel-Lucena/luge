require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const userController = require('./src/controller/UserController');
app.use('/', userController);

const taskController = require('./src/controller/TaskController');
app.use('/', taskController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`😳 Server listening on port: http://localhost:${PORT} 😳`);
});