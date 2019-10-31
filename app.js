var express = require("express");
var app = express();
var path = require("path");
app.engine('html',require('ejs').renderFile);
app.use(express.static("public"));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
//routes
var indexRouter = require('./routes/index');
var topicsRouter = require('./routes/topics');
app.use('/topics',topicsRouter);
app.use('/',indexRouter);
//server listener
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Running Express Server...");
});
module.exports=app;