const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolist_db')


.then(() => console.log('connection sucessfully....'))

.catch((err) => console.log(err));
