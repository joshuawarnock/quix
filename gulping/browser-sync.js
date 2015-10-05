/**
 * Created by joshuawarnock on 10/2/15.
 */

var gulp = require('gulp');
var sync = require('browser-sync').create();
var nodemon = require('nodemon');


sync.init({
  proxy: 'http://localhost:1400',
      reloadDelay: 2000
});

gulp.task('nodemon', function() {
  nodemon({script: 'app.js'})
      .on('start', sync.reload)
});

gulp.task('watch', function() {
  gulp.watch(['*.html', '*.js'], function() {
    sync.reload();
  })
});

//gulp.task('browser-sync', function() {
//  browserSync.init({
//    server: {
//      baseDir: './'
//    }
//  });
//  gulp.watch('*.html').on('change', browserSync.reload);
//});

module.exports = require('require-dir');