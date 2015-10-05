/**
 * Created by joshuawarnock on 10/2/15.
 */

var gulp = require('gulp');
var imageMin = require('gulp-imagemin');


// Image Minify Task
gulp.task('minify-image', function() {
  return gulp.src('/images/*')
      .pipe(imageMin())
      .pipe(gulp.dest('public/dist/images'))
});
module.exports = require('require-dir');