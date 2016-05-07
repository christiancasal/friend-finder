var express = require('express');
var api_router = express.Router();
var path = require('path');
var bodyParser = require("body-parser");
var friendsObj = require("../data/friends.js")

//allows express to handle data parsing
api_router.use(bodyParser.json());
api_router.use(bodyParser.urlencoded({extended: true}));
api_router.use(bodyParser.text());
api_router.use(bodyParser.json({type:'application/vnd.api+json'}));


//api router-------------------------
api_router.post('/api/friends', function(req,res){
  console.log(req.body)
  var newFriend = {
    name: req.body.name,
    photo: req.body.photo,
    score: [
      req.body.q1,
      req.body.q2,
      req.body.q3,
      req.body.q4,
      req.body.q5
    ]
  }

  friendsObj.addFriend(newFriend);
  res.redirect('/');
});

api_router.get('/api/friends', function(req, res){
  res.json(friendsObj.friends)
});


//---------------------------------

module.exports = api_router;
