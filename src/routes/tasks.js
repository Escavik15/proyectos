const express = require('express')
const tasksControllers = require('../controllers/tasksControllers')
const tasksController = require('../controllers/tasksControllers')

const router = express.Router()

router.get('/tasks', tasksController.index)
router.get('/create', tasksController.create)
router.post('/create', tasksController.store)
router.post('/tasks/delete', tasksController.destroy)
router.get('/tasks/edit/:id', tasksController.edit)
router.post('/tasks/edit/:id', tasksController.update)


module.exports = router;