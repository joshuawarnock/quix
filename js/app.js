/**
 * Created by joshuawarnock on 9/16/15.
 */
//This is the server
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
//var bodyParser = require('body-parser');
//var jsonParser = bodyParser.json();

//// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }));
//
//app.use(function(req, res, next){
//  console.log(req.url);
//  next();
//});

// INDEX PATH
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '../index.html'));
});
//// APP PATH
//app.get('/app', function(req, res) {
//  res.sendFile(path.join(__dirname + '/app.js'));
//});
//// FORM PATH
//app.get('/form.js', function(req, res) {
//  res.sendFile(path.join(__dirname + '/form.js'));
//});

//app.post('/form',jsonParser, function(req,res){
//  console.log(JSON.stringify(req.body));
//  res.send('Form has been submitted');
//});

// start the server
var server = app.listen(1400, function(){
  console.log('Server running at http://localhost:' + server.address().port);
});