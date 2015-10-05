/**
 * Created by joshuawarnock on 10/2/15.
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// Nodemon Task
gulp.task('start', function() {
  nodemon({
    script: 'app.js',
  })
      .on('start', ['test', 'watch'])
});

module.exports = require('require-dir');