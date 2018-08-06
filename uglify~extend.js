'use strict';

const fs = require('fs-extra');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const rename = require('gulp-rename');

const appDir = global.appDir;
const conf = global.conf;

const jsBldDir = conf.ui.paths.source.jsBld;
const jsSrcDir = conf.ui.paths.source.jsSrc;

gulp.task('uglify', function () {
  return gulp.src(jsSrcDir + '/**/*.js')
    .pipe(plugins.uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(jsBldDir));
});
