var express = require("express");
var app = express();

app.get('/',function(req,res,next){
    res.render('topics/index');
});
app.get('/python',function(req,res,next){
    res.render('topics/python');
});
app.get('/linux',function(req,res,next){
    res.render('topics/Linux');
});
app.get('/raspberry_pi',function(req,res,next){
    res.render('topics/raspberry_pi');
});
module.exports = app;