// module.exports.editTodo = function(req, res){
//     return res.end('<h1>editTodo_Controller</h1>')
// }



//const db = require('./config/mongoose')
const TodoLists = require('../model/todo_schema')
// function for updatind tada after the todo is being edited
module.exports.editTodo = function(req,res){
    dueDate =req.body.date.split('-'); // splitting date and taking montha value
    let newdate='';
    newdate= DateValeu(date);     
     TodoLists.updateOne({_id:req.query.id},{$set:{desc:req.body.desc,category:req.body.category,dueDate:newdate}} ,function(err,todoData){
        if(err){console.log('erroe while updating'); return}
        return res.redirect('/')
    })
}
