const mongoose = require("mongoose");

const user = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

mongoose.exports = mongoose.model("User", user);