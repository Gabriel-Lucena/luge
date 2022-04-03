const User = require("../models/User");
const express = require("express");

module.exports = {
  async index(request, response) {
    try {
      const users = User.find;
      return response.status(200).json({ users });
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  },
};
