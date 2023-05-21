// module.exports.deleteTodo = function(req, res){
//     return res.end('<h1>CreateTodo_Controller</h1>')
// }


const TodoLists = require('../model/todo_schema')


module.exports.deleteTodo = function (req, res) {
    // get the id from query in the URL
    let id = req.query.id; // requesting id from DB

    // finding the contact in the database using id and deleting it
    TodoLists.findByIdAndDelete(id)
        .then(() => {
            return res.redirect('back');
        })
        .catch(err => {
            console.log("error in deleting object:", err);
            return;
        });
}