'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const conf = global.conf;

const jsBldDir = conf.ui.paths.source.jsBld;
const jsSrcDir = conf.ui.paths.source.jsSrc;

gulp.task('uglify', function () {
  return gulp.src(jsSrcDir + '/**/*.js')
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(jsBldDir));
});
