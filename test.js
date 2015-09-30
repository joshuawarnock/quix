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
    res.send('/');
  });

  var agent = request.agent(app);

  it('status code 200', function(done){
    agent
        .get('/')
        .expect(200)
        .end(done)
  });
  it('sends /', function(done){
    agent
        .get('/')
        .expect('/')
        .end(done)
  })
});

