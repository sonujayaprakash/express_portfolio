var express = require('express');
var app = express.Router();
app.get('/',function(req,res){
    res.render('Contact')
})
module.exports = app;