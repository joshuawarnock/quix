/**
 * Created by joshuawarnock on 10/2/15.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');


gulp.task('uglify', function() {
  return gulp.src('/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('public/dist/js'));
});
module.exports = require('require-dir');