'use strict';

const conf = global.conf;
const fs = require('fs-extra');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const rename = require('gulp-rename');

const appDir = global.appDir;
const utils = require(`${appDir}/core/lib/utils`);

const jsBldDir = utils.pathResolve(conf.ui.paths.source.jsBld);
const jsSrcDir = utils.pathResolve(conf.ui.paths.source.jsSrc);

gulp.task('uglify', function () {
  return gulp.src(jsSrcDir + '/**/*.js')
    .pipe(plugins.uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(jsBldDir));
});
