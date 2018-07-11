'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
dotenv.load();

var app = express();

var users = require('./routes/users');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
/*app.use(function(req,res,next){
    console.log(req.method);            //SEE WHAT IS THE REQUEST METHOD FOR EVERY API HIT
    next();
})*/

app.use('/', users);

process.on('uncaughtException', function (error) {
    console.log(error);
});

app.listen(8080, function () {
    console.log('Server running at port 8080', [Date()])
})
