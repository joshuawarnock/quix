/**
 * Created by joshuawarnock on 9/30/15.
 */

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');

gulp.task('test', function(){
  return gulp.src('test.js', {read: false})
      .pipe(mocha({reporter: 'landing'}));
});

gulp.task('start', function(){
  nodemon({
    script: 'app.js',
    ext: 'js html'
  })
});

gulp.task('stop', function(){
  nodemon({
    script: 'app.js',
    ext: 'js html'
  })
});

gulp.task('restart', function(){
  nodemon({
    script: 'app.js',
    ext: 'js html'
  })
});

gulp.task('watch', function(){
  gulp.watch('*.js', ['test']);
});

gulp.task('default', ['test', 'watch']);

