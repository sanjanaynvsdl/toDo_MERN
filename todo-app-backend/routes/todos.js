const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const verifyToken = require('../middleware/verifyToken');

// router.use(verifyToken);  // This will apply the middleware to all routes in this file

router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;