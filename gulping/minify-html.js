/**
 * Created by joshuawarnock on 10/2/15.
 */

var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');

// Minify HTML Task
gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare: true,
    comments: true
  };
  return gulp.src('*.html')
      .pipe(minifyHTML(opts))
      .pipe(gulp.dest('public/dist/'));
});
module.exports = require('require-dir');