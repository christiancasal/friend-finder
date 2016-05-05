var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
// var mysql = require('mysql');
var apiRoute = require('./app/routing/api-routes.js');
var htmlRoute = require('./app/routing/html-routes.js');
var logger = require("morgan");

// //start up the database
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'friendFinderDB'
// });

// connection.connect(function(err){
//   if(err) throw err;
// });

//start up the express app
var app = express();
var PORT = 3000;

//allows express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(logger('dev'));


app.get('/api/friends', apiRoute);
app.get('/survey', htmlRoute);
app.use('/', htmlRoute);





app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});