const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required:true
    }   
})

const TodoLists = mongoose.model('TodoLists', todoSchema);
module.exports  = TodoLists;