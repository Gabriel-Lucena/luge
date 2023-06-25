const Sequelize = require('sequelize');

const connection = require('../database/database.js');

const User = connection.define('tblUser', {

  idUser: {
    type: Sequelize.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },

  username: {
    type: Sequelize.STRING(20),
    allowNull: false,
    unique: true,
  },

  password: {
    type: Sequelize.STRING(16),
    allowNull: false,
    unique: true,
  }

});

// User.sync({
//   force: true
// });

module.exports = User;