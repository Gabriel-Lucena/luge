const User = require('../models/User');
const { request } = require('express');
const { v4: uuid } = require('uuid');

module.exports = {
  async getAll(request, response) {
    try {
      const users = User.find;
      return response.status(200).json({ users });
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  },

  async create(request, response) {
    const { username, password } = request.body;

    if (!username || !password) {
      return response
        .status(400)

        .json({ error: 'Invalid username or password' });
    }

    const user = new User({
      _id: uuid(),
      username,
      password,
    });

    try {
      await user.save();

      return response.status(201).json({ message: 'User added successfully' });
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },
};
