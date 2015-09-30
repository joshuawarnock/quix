/**
 * Created by joshuawarnock on 9/30/15.
 */

var request = require('supertest');
var should = require('should');
var express = require('express');

describe('Express Backend Test', function(){

  var app = express();

  app.get('/', function(req, res){
    res.send('hello world');
  });

  var agent = request.agent(app);

  it('status code 200', function(done){
    agent
        .get('/')
        .expect(200)
        .end(done)
  });
  it('sends hello world', function(done){
    agent
        .get('/')
        .expect('hello world')
        .end(done)
  })
});

