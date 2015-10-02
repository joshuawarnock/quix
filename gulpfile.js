/**
 * Created by joshuawarnock on 9/30/15.
 */

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var imageMin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

var requireDir = require('require-dir');
var dir = requireDir('./gulping');
require('require-dir')('./gulping');

// Nodemon Task
gulp.task('start', function() {
  nodemon({
    script: 'app.js',
  })
      .on('start', ['test'])
});

// Test Task
gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
      .pipe(mocha());
});

// Watch Task
gulp.task('watch', function() {
  gulp.watch('*.js', ['test']);
});

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

// Minify CSS Task
gulp.task('minify-css', function() {
  return gulp.src('/css/*.css')
      .pipe(minifyCss())
      .pipe(gulp.dest('public/dist/css'))
});

//
gulp.task('minify-image', function() {
  return gulp.src('/images/*')
      .pipe(imageMin())
      .pipe(gulp.dest('public/dist/images'))
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['start', 'watch', 'uglify', 'minify-html', 'minify-css', 'minify-image', 'browser-sync']);