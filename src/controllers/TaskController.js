const Task = require('../models/Task');
const { request } = require('express');
const { v4: uuid } = require('uuid');

module.exports = {
  async create(request, response) {
    const { idUser, name, taskText } = request.body;

    if (!idUser) {
      return response.status(400).json({ error: 'User id is not defined' });
    }

    if (!name || !taskText) {
      return response.status(400).json({ error: 'Invalid values' });
    }

    const task = new Task({
      _id: uuid(),
      idUser,
      name,
      taskText,
    });

    try {
      await task.save();

      return response.status(201).json({ message: 'Task created successfully' });
    } catch (err) {
      response.status(400).json({ message: err.message });
    }
  },

  async getAllById(request, response) {
    const { idUser } = request.params;

    if (!idUser) {
      return response.status(400).json({ message: 'User id is not defined' });
    }

    const tasks = Task.find(
      { idUser },
      { _id: 0, name: 1, taskText: 1, completed: 1, created_at: 1 },
      function (err, result) {
        if (err) {
          return response.status(400).json({ error: err.message });
        } else {
          return response.status(200).json(result);
        }
      },
    );
  },

  async toComplete(request, response) {},
  async getAllByCompleted(request, response) {},
  async deleteById(request, response) {},
  async updateById(request, response) {},
};
