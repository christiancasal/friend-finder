var express = require('express');
var api_router = express.Router();
var path = require('path');
var bodyParser = require("body-parser");

//allows express to handle data parsing
api_router.use(bodyParser.json());
api_router.use(bodyParser.urlencoded({extended: false}));
api_router.use(bodyParser.text());
api_router.use(bodyParser.json({type:'application/vnd.api+json'}));


//start up the database--------------

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'friendFinderDB'
});

connection.connect(function(err){
  if(err) throw err;
});
//------------------------------------

//container for incoming api data-------------

var arrFriends = [];

//--------------------------------------

//api router-------------------------

api_router.get('/api/friends', function(req, res){
  // console.log(req.params);
  // console.log(res);
  // console.log(arrFriends);
  var arrFriends = [];
  
  connection.query('SELECT * FROM friends_tbl', function(err, result){

    result.forEach(function(row) {
      
      console.log(JSON.stringify(row, null, 2));
      arrFriends.push(row);
      res.json(arrFriends)
      });
  }); 
});

// api_router.post('/api/friends', function(req,res){
// 	var newFriend = req.body;
// 	console.log(newFriend); 

// 	arrFriends.push(newFriend);
// 	//TODO connection query to update the database with new friends

// 	res.json(newFriend);

// 	//TODO: handle match logic
// });

//---------------------------------

module.exports = api_router;
