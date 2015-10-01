/**
 * Created by joshuawarnock on 9/30/15.
 */

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');

gulp.task('start', function() {
  nodemon({
    script: 'app.js',
  }).on('start', ['test'])
});

gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
      .pipe(mocha({reporter: 'landing'}));
});

gulp.task('watch', function() {
  gulp.watch('*.js', ['test']);
});

gulp.task('compress', function() {
  return gulp.src('quix/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('public/dist/'));
});

gulp.task('default', ['test', 'watch', 'compress']);

