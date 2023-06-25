const Sequelize = require("sequelize");

const connection = require("../database/database.js");

const User = require("./User.js");

const Task = connection.define("tblTask", {

  idTask: {
    type: Sequelize.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },

  name: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
  },

  string: {
    type: Sequelize.STRING(100),
    defaultValue: "",
  },

  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },

});

User.hasMany(Task);

Task.belongsTo(User);

// Task.sync({
//   force: true
// });

module.exports = Task;