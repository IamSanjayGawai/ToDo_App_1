const TodoLists = require('../model/todo_schema')


// function for creating toto list
module.exports.createTodo = function(req, res){
    TodoLists.create({ // creating a new todo and storing into DB
        task: req.body.task,
        category: req.body.category,
        date: req.body.date,
    })
    .then(newArr => {
        console.log(req.body); 
        return res.redirect('/');
    })
    .catch(err => {
        console.log('Oops error occurred while creating task n controler:', err);
        return;
    });
}