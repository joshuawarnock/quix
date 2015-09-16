/**
 * Created by joshuawarnock on 9/16/15.
 */

var express = require('express');
var request = require('request');
var path = require('path');
var router = express.Router();


//request('http://www.google.com', function (error, response, body) {
//  if (!error && response.statusCode == 200) {
//    console.log(body) // Show the HTML for the Google homepage.
//  }
//});


router.get('/', function(req, res, next) {
  request('http://api.nytimes.com/svc/search/v2/articlesearch'+
      'articlesearch.json' +
      '?fq=romney' +
      '&api-key=7a16ce8e2de13545e4f2dd9978c8cd69:3:72958756',
      function (error, response, body) {
        //var docs = JSON.parse(body).response.docs;
        //var urls = [];
        //for (var i = 0; i < docs.length; i++) {
        //  urls[i] = docs[i].web_url;
        //}
        res.send(body);
      });
});


module.exports = router;

