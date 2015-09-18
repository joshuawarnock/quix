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


/*
router.get('/:term', function(req, res, next) {
  request('http://api.nytimes.com/svc/search/v2/articlesearch.json'+
      '?fq='+ req.params.term +
      '&api-key=7a16ce8e2de13545e4f2dd9978c8cd69:3:72958756',
      function (error, response, body) {
        var docs = JSON.parse(body).response.docs;
        var urls = [];
        for (var i = 0; i < docs.length; i++) {
          urls[i] = docs[i].web_url;
        }
        res.send(urls);
      });
});
*/

module.exports = router;

