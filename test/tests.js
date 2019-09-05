'use strict';

const fs = require('fs-extra');
const path = require('path');

const {expect} = require('chai');

// Instantiate gulp and assign it to the fp const.
process.env.ROOT_DIR = __dirname;
const fp = require('fepper/tasker');
require('../uglify~extend');

const conf = global.conf;
const pref = global.pref;

const srcJsBldDir = conf.ui.paths.source.jsBld;

const enc = 'utf8';

describe('fp-uglify', function () {
  const fixtureMin = path.join(srcJsBldDir, 'fixture.min.js');
  let fixtureMinExistsBefore;

  before(function () {
    if (fs.existsSync(fixtureMin)) {
      fs.unlinkSync(fixtureMin);
    }

    fixtureMinExistsBefore = fs.existsSync(fixtureMin);
  });

  describe('fp uglify', function () {
    it('minifies source javascript', function (done) {
      fp.runSeq(
        'uglify',
        () => {
          const minified = fs.readFileSync(fixtureMin, enc);

          require(fixtureMin);

          expect(fixtureMinExistsBefore).to.be.false;
          expect(minified).to.contain(
            'var root="object"==typeof global?global:window,descriptiveVarForString="fixture.js.map";root.sourcemaps=root.sourcemaps||{},root.sourcemaps["fixture.min.js"]=descriptiveVarForString;'
          );
          expect(global.sourcemaps['fixture.min.js']).to.equal('fixture.js.map');

          done();
        }
      );
    });

    it('accepts custom options', function (done) {
      pref.uglify = {
        mangle: {
          toplevel: true
        }
      };


      fp.runSeq(
        'uglify',
        () => {
          const minified = fs.readFileSync(fixtureMin, enc);

          expect(minified).to.contain(
            'var o="object"==typeof global?global:window,s="fixture.js.map";o.sourcemaps=o.sourcemaps||{},o.sourcemaps["fixture.min.js"]=s;'
          );

          done();
        }
      );
    });

    describe('sourcemapping', function () {
      const sourcemap = path.join(srcJsBldDir, 'fixture.js.map');
      let sourcemapExistsBefore;

      before(function () {
        if (fs.existsSync(sourcemap)) {
          fs.unlinkSync(sourcemap);
        }

        sourcemapExistsBefore = fs.existsSync(sourcemap);
      });

      it('writes a sourcemap inline if configured to so', function (done) {
        pref.uglify = {
          sourceMap: {
            url: 'inline'
          }
        };

        fp.runSeq(
          'uglify',
          () => {
            const sourcemapExistsAfter = fs.existsSync(sourcemap);
            const sourcemapInline = fs.readFileSync(fixtureMin, enc);

            expect(sourcemapExistsBefore).to.be.false;
            expect(sourcemapExistsAfter).to.be.false;
            expect(sourcemapInline).to.contain('//# sourceMappingURL=data:application/json;');

            done();
          }
        );
      });

      it('writes a sourcemap file if configured to do so', function (done) {
        pref.uglify = {
          sourceMap: true
        };

        fp.runSeq(
          'uglify',
          () => {
            const sourcemapExistsAfter = fs.existsSync(sourcemap);
            const sourcemapJson = fs.readJsonSync(sourcemap);

            expect(sourcemapExistsBefore).to.be.false;
            expect(sourcemapExistsAfter).to.be.true;
            expect(sourcemapJson).to.have.property('version');
            expect(sourcemapJson).to.have.property('sources');
            expect(sourcemapJson).to.have.property('names');
            expect(sourcemapJson).to.have.property('mappings');
            expect(sourcemapJson).to.have.property('file');

            done();
          }
        );
      });

      it('writes a sourcemap file with a custom sourceRoot if configured to so', function (done) {
        pref.uglify = {
          sourceMap: {
            root: '/foo/bar'
          }
        };

        fp.runSeq(
          'uglify',
          () => {
            const sourcemapExistsAfter = fs.existsSync(sourcemap);
            const sourcemapJson = fs.readJsonSync(sourcemap);

            expect(sourcemapExistsBefore).to.be.false;
            expect(sourcemapExistsAfter).to.be.true;
            expect(sourcemapJson.sourceRoot).to.equal(pref.uglify.sourceMap.root);

            done();
          }
        );
      });
    });
  });

  describe('fp uglify:help', function () {
    it('prints help text', function (done) {
      fp.runSeq(
        'uglify:help',
        done
      );
    });
  });
});
