/**
 * Created by joshuawarnock on 9/16/15.
 */

var express = require('express');
var request = require('request');
var path = require('path');
var router = express.Router();

var google = require('google');

google.resultsPerPage = 25;
var nextCounter = 0;

google('/:term', function (err, next, links){
  if (err) console.error(err);

  for (var i = 0; i < links.length; ++i){
    console.log(links[i].title + '-' + links[i].link);
    console.log(links[i].description + '\n')
  }
  if (nextCounter < 4){
    nextCounter +=1;
    if (next) next()
  }
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

