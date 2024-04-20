const express = require('express');

const task = require('../model/Task');

const router = express.Router();

/**
 * Create a new task
 */

router.post('/task/', (req, res) => {

  const {
    idUser,
    name,
    string
  } = req.body;

  task.create({

    tblUserIdUser: idUser,
    name: name,
    string: string

  }).then((task) => {
    res.status(200).json(task)
  });

});

/**
 * Delete a task
 */

router.delete('/task/', (req, res) => {

  const {
    idUser,
    idTask
  } = req.body;

  task.destroy({

    where: {
      tblUserIdUser: idUser,
      idTask: idTask
    },

  }).then((task) => {
    res.status(200).json(task);
  });
});

/**
 * Search for tasks by id
 */

router.get('/task/:idUser', (req, res) => {

  const {
    idUser
  } = req.params;

  task.findAll({

    where: {
      tblUserIdUser: idUser
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
    status,
    idTask
  } = req.body;

  if (status == "true") {
    task.update({

        status: 1
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

        status: 0,
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