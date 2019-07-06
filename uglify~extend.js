'use strict';

const {Transform} = require('stream');

const gulp = global.gulp || require('gulp');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const utils = require('fepper-utils');

const conf = global.conf;
const pref = global.pref;

const jsBldDir = conf.ui.paths.source.jsBld;
const jsSrcDir = conf.ui.paths.source.jsSrc;

// Set up pref.uglify.
pref.uglify = pref.uglify || {};

function getSourcemapDest() {
  if (pref.uglify.sourceMap && pref.uglify.sourceMap.url !== 'inline') {
    return '.';
  }

  return;
}

function getSourceRoot() {
  if (pref.uglify.sourceMap && pref.uglify.sourceMap.root) {
    const sourceRoot = pref.uglify.sourceMap.root;

    return {sourceRoot};
  }

  return;
}

function streamUntouched() {
  return new Transform({
    readableObjectMode: true,
    writableObjectMode: true,
    transform(file, enc, cb) {
      this.push(file);
      cb();
    }
  });
}

// Declare gulp tasks.

gulp.task('uglify', function () {
  let sourcemapsInit = sourcemaps.init;
  let sourcemapsWrite = sourcemaps.write;

  // Do not write sourcemaps if pref.uglify.sourceMap is falsey.
  if (!pref.uglify.sourceMap) {
    sourcemapsInit = () => {
      return streamUntouched();
    };
    sourcemapsWrite = () => {
      return streamUntouched();
    };
  }

  return gulp.src(jsSrcDir + '/**/*.js')
    .pipe(sourcemapsInit())
    .pipe(uglify(pref.uglify))
    .pipe(sourcemapsWrite(getSourcemapDest(), getSourceRoot()))
    .pipe(rename((path) => {
      if (path.extname === '.js') {
        path.extname = '.min.js';
      }
    }))
    .pipe(gulp.dest(jsBldDir));
});

gulp.task('uglify:help', function (cb) {
  let out = `
Fepper Uglify Extension

Use:
    <task> [<additional args>...]

Tasks:
    fp uglify       Minify Fepper's frontend JavaScript files.
    fp uglify:help  Print fp-uglify tasks and descriptions.
`;

  utils.info(out);
  cb();
});
