/**
 * Created by joshuawarnock on 10/2/15.
 */

var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

// Minify CSS Task
gulp.task('minify-css', function() {
  return gulp.src('/css/*.css')
      .pipe(minifyCss())
      .pipe(gulp.dest('public/dist/css'))
});
module.exports = require('require-dir');