/**
 * Created by joshuawarnock on 9/30/15.
 */

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var requireDir = require('require-dir');
var wiredep = require('wiredep').stream;
var dir = requireDir('./gulping');
require('require-dir')('./gulping');

// Test Task
gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
      .pipe(mocha());
});

// Watch Task
gulp.task('watch', function() {
  gulp.watch('*.js', ['test']);
});

gulp.task('bower', function() {
  gulp.src('index.html')
      .pipe(wiredep({
        optional: 'configuration',
        goes: 'here'
      }))
      .pipe(gulp.dest('public/dist/'))
});

gulp.task('default', ['start', 'watch', 'uglify', 'minify-html', 'minify-css', 'minify-image']);