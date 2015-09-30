/**
 * Created by joshuawarnock on 9/30/15.
 */

var request = require('supertest');
var should = require('should');
var express = require('express');
var path = require('path');

describe('Express Backend Test', function(){

  var app = express();

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/'));
  });

  var agent = request.agent(app);

  it('Page status OK.', function(done){
    agent
        .get('/')
        .expect(200)
        .end(done)
  });
  it('Verify index.html header.', function(done){
    agent
        .get('/')
        .set('Accept', 'text/html')
        .expect('Content-Type', 'text/html; charset=UTF-8')
        .end(function(err, res){
          if (err) return done(err);
          done();
        })
  });
});

