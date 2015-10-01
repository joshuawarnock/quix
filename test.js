/**
 * Created by joshuawarnock on 9/30/15.
 */

var request = require('supertest')('http://localhost:1400');
var should = require('should');

describe('Express Backend Test', function(){

  it('Page status OK.', function(done){
    request.get('/')
        .expect(200)
        .end(done)
  });

});

