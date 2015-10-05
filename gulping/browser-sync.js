/**
 * Created by joshuawarnock on 10/2/15.
 */

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('*.html').on('change', browserSync.reload);
});

module.exports = require('require-dir');