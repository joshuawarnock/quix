/**
 * Created by joshuawarnock on 9/30/15.
 */

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');


gulp.task('start', function() {
  nodemon({
    script: 'app.js',
  }).on('start', ['test'])
});

gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
      .pipe(mocha());
});

gulp.task('watch', function() {
  gulp.watch('*.js', ['test']);
});

gulp.task('uglify', function() {
  return gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('public/dist/'));
});

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

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
      .pipe(gulp.dest('public/dist/css'))
});

gulp.task('default', ['test', 'watch', 'uglify', 'minify-html', 'minify-css']);

