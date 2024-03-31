const express = require('express');

const user = require('../model/User');

const router = express.Router();

/**
 * All Users
 */

router.get('/user/', (req, res) => {

  user.findAll().then((users) => {
    res.status(200).json(users);
  })

});

/**
 * Search id by user
 */

router.post('/user/login', (req, res) => {

  const {
    username,
    password
  } = req.body;


  user.findAll({

    attributes: ['idUser'],
    where: {
      username: username,
      password: password
    }

  }).then((user) => {
    try {
      res.status(200).json(user[0].idUser);
    } catch (error) {
      res.status(200).json(0);
    }
  })
});

/**
 * Create a new user
 */

router.post('/user/', (req, res) => {

  const {
    username,
    password
  } = req.body;

  user.create({
    username: username,
    password: password
  }).then(() => {
    res.status(200).json({
      MSG: 'Created successfully!'
    });
  });

});


module.exports = router;