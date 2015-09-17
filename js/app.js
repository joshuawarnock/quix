/**
 * Created by joshuawarnock on 9/16/15.
 */

var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


app.use(express.static('../css'));
app.use('/css',express.static('../css'));
app.use(express.static('../images'));
app.use('/images',express.static('../images'));
app.use(express.static('../js'));
app.use('/js', express.static('../js'));
//app.use(express.static('static'));


// Parse Application
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next){
  console.log(req.url);
  next();
});

// INDEX PATH
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'));
});


// APP PATH
app.get('/app', function(req, res) {
  res.sendFile(path.join(__dirname + '/app.js'));
});


// FORM PATH
app.get('/form.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/form.js'));
});


app.post('/form',jsonParser, function(req,res){
  console.log(JSON.stringify(req.body));
  res.send('Form has been submitted');
});


// start the server
var server = app.listen(1400, function(){
  console.log('Server running at http://localhost:' + server.address().port);
});