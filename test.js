/**
 * Created by joshuawarnock on 9/30/15.
 */

var request = require('supertest')('http://localhost:1400');
var should = require('should');

describe('Express Backend Test', function(){

  it('Page Status & Content Type OK.', function(done){
    request.get('/')
        .expect(200)

        .end(done)
  });

  it('CSS Status & Content Type OK.', function(done){
    request.get('/css')
        .expect(303)
        .end(done)
  });

  it('Fonts Status & Content Type OK.', function(done){
    request.get('/fonts')
        .expect(303)
        .end(done)
  });

  it('Images Status & Content Type OK.', function(done){
    request.get('/images')
        .expect(303)
        .end(done)
  });

  it('JavaScript Status & Content Type OK.', function(done){
    request.get('/js')
        .expect(303)
        .end(done)
  });

  it('Test for API static path', function(done) {
    request.get('/api')
        .end(done)
  });
});