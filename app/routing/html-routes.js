var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var html_router = express.Router();

html_router.use(bodyParser.json());
html_router.use(bodyParser.urlencoded({extended: false}));
html_router.use(bodyParser.text());
html_router.use(bodyParser.json({type:'application/vnd.api+json'}));


//basic homepage route
html_router.get('/survey', function(req,res){
  res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

html_router.use('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});


module.exports = html_router;
