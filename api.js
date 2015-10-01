/**
 * Created by joshuawarnock on 9/16/15.
 */

var express = require('express');
var request = require('request');
var path = require('path');
var router = express.Router();
var google = require('google');

router.get('/search/:term', function(req,res,next){
  google.resultsPerPage = 10;
  var nextCounter = 0;
  google(req.params.term, function (err, next, links){
    if (err) console.error(err);
    res.send(links);
  });
});
module.exports = router;