const express = require('express');
const port = 8000;
const app =express();

const db = require('./config/mongoose')

// using parser here to parse and handle middlewware 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


//import routes to handle all urls
app.use('/', require('./routes'));

//import static files
app.use(express.static('./assets'))


//setup ejs engine template
app.set('view engine', 'ejs');
app.set('views', './views');





app.listen(port, function(err){
    if(err){
        console.log(`error at listening to server`);
        return;
    }

    console.log(`Server is running successfully at port: ${port}`);
})