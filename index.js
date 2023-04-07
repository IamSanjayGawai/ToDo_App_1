const express = require('express');
const port = 8000;
const app = express();






app.listen(port, function(err){
    if(err){
        console.log(`error at the lisneing to port: ${port}`)
    }
    console.log(`Succesfully lisneing to port: ${port}`)
})