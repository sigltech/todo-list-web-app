const express = require('express');
const router = express.Router();
const tasksController = require('../Controllers/tasks-controller')

router.get('/', tasksController.index);
