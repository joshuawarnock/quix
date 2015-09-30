/**
 * Created by joshuawarnock on 9/16/15.
 */

var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var api = require('./api.js');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.use('/css',express.static('../css'));
app.use('/fonts', express.static('../fonts'));
app.use('/images',express.static('../images'));
app.use('/js', express.static('../js'));

app.use('/api',api);

// Parse Application
app.use(bodyParser.urlencoded({ extended: false }));

// Index Path
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'));
});

app.post('/form',jsonParser, function(req,res){
  console.log(JSON.stringify(req.body));
  res.send('Form has been submitted');
});
var server = app.listen(1400, function(){
  console.log('Server running at http://localhost:' + server.address().port);
});