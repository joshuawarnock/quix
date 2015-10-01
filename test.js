/**
 * Created by joshuawarnock on 9/30/15.
 */

var request = require('supertest')('http://localhost:1400');
var should = require('should');

describe('Express Backend Test', function(){

  it('Page status OK.', function(done){
    request.get('/')
    //agent
        .get('/')
        .expect(200)
        .end(done)
  });
  //it('Verify index.html header.', function(done){
  //  agent
  //      .get('/')
  //      .set('Accept', 'text/html')
  //      .expect('Content-Type', 'text/html; charset=UTF-8')
  //      .end(function(err, res){
  //        if (err) return done(err);
  //        done();
  //      })
  //});
});

