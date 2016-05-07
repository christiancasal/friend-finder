var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var htmlRoute = require('./app/routing/html-routes.js');
var apiRoute = require('./app/routing/api-routes.js');
var logger = require("morgan");


//start up the express app
var app = express();
var PORT = 3000;

//allows express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(logger('dev'));

app.use('/', apiRoute);
app.use('/', htmlRoute);








app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});
