const mongoose = require('mongoose');

const task = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  idUser: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  taskText: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Task', task);
