const User = require('../models/User');
const { request } = require('express');
const { v4: uuid } = require('uuid');
const md5 = require('md5');

module.exports = {
  async getAll(request, response) {
    User.find({}, { username: 1, _id: 0 }, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        response.json(result);
      }
    });
  },

  async create(request, response) {
    const { username, password } = request.body;

    if (!username || !password) {
      return response
        .status(400)

        .json({ error: 'Invalid username or password' });
    }

    const exists = User.find({ username: username, password: md5(password) });

    if (!exists) {
      const hashedPassword = md5(password);

      const user = new User({
        _id: uuid(),
        username,
        password: hashedPassword,
      });

      try {
        await user.save();

        return response.status(201).json({ message: 'User added successfully' });
      } catch (err) {
        response.status(400).json({ error: err.message });
      }
    } else {
      return response.status(409).json({ message: 'User already exists' });
    }
  },

  async login(request, response) {
    const { username, password } = request.body;

    User.findOne({ username, password: md5(password) }, { _id: 1 }, function (err, user) {
      if (err) {
        console.log(err);
        return response.status(500).send();
      }

      if (!user) {
        return response.status(404).json({ message: 'Username or password wrong' });
      }

      return response.status(200).json({ message: 'User logged in successfully', user });
    });
  },
};
