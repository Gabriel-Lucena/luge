const express = require('express');

const task = require('../model/Task');

const router = express.Router();

/**
 * Create a new task
 */

router.post('/task/', (req, res) => {

  const {
    idUser,
    username,
    password
  } = req.body;

  task.create({

    username: username,
    password: password,
    idUser: idUser,

  }).then(() => {
    res.status(200).json(task)
  });

});


/**
 * Search for tasks by id
 */

router.get('/task/:idUser', (req, res) => {

  task.findAll({

    where: {
      idUser: idUser
    },
  }).then((task) => {
    res.status(200).json(task);

  })

});

/**
 * Change the status of a task
 */

router.put('/task/', (req, res) => {

  const {
    idUser,
    idTask
  } = req.body;

  let task;

  task.findAll({

    where: {
      idUser: idUser
    }

  }).then(() => {
    task = task.status;
  })

  if (task) {

    task.update({

        status: false,
      }, {
        where: {
          idTask: idTask
        }
      }

    ).then(() => {
      res.status(200).json({
        MSG: 'Changed status'
      });
    })

  } else {

    task.update({

        status: true,
      }, {
        where: {
          idTask: idTask
        }
      }

    ).then(() => {
      res.status(200).json({
        MSG: 'Changed status'
      });
    })

  }

});

module.exports = router;