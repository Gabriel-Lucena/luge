const Sequelize = require('sequelize');

require("dotenv").config();

const connection = new Sequelize('dbLuge', process.env.USER, process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00'
});

module.exports = connection;