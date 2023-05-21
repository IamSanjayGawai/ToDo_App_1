const express = require('express');

const router = express.Router();
const home_controller =require('../controllers/homecontroller');
const create_controller =require('../controllers/createTodocontroller');
const delete_controller =require('../controllers/deleteTodocontroller');
const  edit_controller =require('../controllers/editTodocontroller');

console.log('router loaded');




router.get('/', home_controller.home)
router.post('/createTodo',create_controller.createTodo)
router.get('/deleteTodo',delete_controller.deleteTodo)
router.get('/editTodo',edit_controller.editTodo)

// it will exports router 
module.exports = router;