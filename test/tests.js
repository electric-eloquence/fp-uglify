'use strict';

const fs = require('fs');
const join = require('path').join;

const expect = require('chai').expect;

// Instantiate a gulp instance and assign it to the fp const.
process.env.ROOT_DIR = __dirname;
const fp = require('fepper/tasker');
require('../uglify~extend');

const enc = 'utf8';

describe('fp-uglify', function () {
  const fixtureMin = join(__dirname, 'source/_scripts/bld/fixture.min.js');
  let fixtureMinExistsBefore;

  before(function (done) {
    if (fs.existsSync(fixtureMin)) {
      fs.unlinkSync(fixtureMin);
    }

    fixtureMinExistsBefore = fs.existsSync(fixtureMin);

    fp.runSequence(
      'uglify',
      done
    );
  });

  after(function () {
    if (fs.existsSync(fixtureMin)) {
      fs.unlinkSync(fixtureMin);
    }
  });

  it('should minify source javascript', function () {
    const minified = fs.readFileSync(fixtureMin, enc);

    expect(fixtureMinExistsBefore).to.equal(false);
    expect(minified).to.equal('!function(){"use strict";var l;l="Hello world!",global.result=l}();');
  });

  it('should write minified javascript that executes correctly', function () {
    require(fixtureMin);

    expect(global.result).to.equal('Hello world!');
  });
});
