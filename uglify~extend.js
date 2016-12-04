'use strict';

const srcDir = global.conf.ui.paths.source;

const fs = require('fs-extra');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const utilsGulp = require('../../../gulp/utils');

const bldDir = utilsGulp.pathResolve(srcDir.js) + '/bld';
if (!fs.existsSync(bldDir)) {
  fs.mkdirSync(bldDir);
}

gulp.task('uglify', function () {
  return gulp.src(utilsGulp.pathResolve(srcDir.js) + '/src/**/*.js')
    .pipe(plugins.uglify())
    .pipe(plugins.rename({extname: '.min.js'}))
    .pipe(gulp.dest(bldDir));
});
