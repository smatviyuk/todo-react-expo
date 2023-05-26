const express = require('express');
const mongoose = require('mongoose');

const todoRoutes = require('./routes/todo');

const app = express();
const MONGODBURL = "mongodb+srv://user:user123@cluster0.faxjgxz.mongodb.net/";
app.use(express.json());

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(todoRoutes);

app.use((error, req, res, next) => {

    console.log(error);
    res.status(error.statusCode || 500).json({
        message: error.message,
        data: error.data
    });

});
mongoose.set('strictQuery', false)
mongoose.connect(MONGODBURL)
    .then(result => {        
        app.listen(8080);
    })
    .catch(error => {
        console.log(error);
    });
