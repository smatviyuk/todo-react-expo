const express = require('express');
const {body} = require('express-validator')
const todoController = require('../controllers/todo');

const router = express.Router();

router.get('/get', todoController.getAllTodos);

router.get('/get/:tid', todoController.getOneTodo);

router.post('/post', [
    body('name',"Provide a valid name")
        .isLength({ min: 2})
        .trim(),
    body('status', "Provide a valid status")
        .isBoolean()
], todoController.postTodo);

router.put('/put/:tid', [
    body('status', "Provide a valid status")
        .isBoolean()
], todoController.putTodo);

router.delete('/delete/:tid', todoController.deleteTodo);

module.exports = router;



