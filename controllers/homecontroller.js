// const db = require('..model/todo_li');

const TodoLists = require('../model/todo_schema')

// module.exports.home = function(req, res){
//     return res.end('<h1>Express is up for codial</h1>');
    
// }


module.exports.home = function(req, res) {
    TodoLists.find({})
        .exec()
        .then(function(todo) {
            return res.render('home', {
                title: "To-Do",
                todolist: todo
            });
        })
        .catch(function(err) {
            console.log("error in fetching todo from db in homecontroller:", err);
            return;
        });
};