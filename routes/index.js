var express = require('express');
var app = express();



app.get('/',function(req,res,next){
    res.render('index.html');
});
app.get('/mercury',function(req,res,next){
    res.render('mercury.html');
});
module.exports = app;