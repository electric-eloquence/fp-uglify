# Uglify extension for Fepper client-side JavaScript

[![Known Vulnerabilities][snyk-image]][snyk-url]
[![Mac/Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![License][license-image]][license-url]

### Install

Add these tasks to `extend/contrib.js`

* Under gulp task 'contrib:static'
  * 'uglify'
* Under gulp task 'contrib:syncback'
  * 'uglify'

Running the `uglify` task will write the compressed JS to the 
`paths.source.jsBld` directory as defined in `patternlab-config.json`.

[snyk-image]: https://snyk.io/test/github/electric-eloquence/fp-uglify/master/badge.svg
[snyk-url]: https://snyk.io/test/github/electric-eloquence/fp-uglify/master

[travis-image]: https://img.shields.io/travis/electric-eloquence/fp-uglify.svg?label=mac%20%26%20linux
[travis-url]: https://travis-ci.org/electric-eloquence/fp-uglify

[appveyor-image]: https://img.shields.io/appveyor/ci/e2tha-e/fp-uglify.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/e2tha-e/fp-uglify

[coveralls-image]: https://img.shields.io/coveralls/electric-eloquence/fp-uglify/master.svg
[coveralls-url]: https://coveralls.io/r/electric-eloquence/fp-uglify

[license-image]: https://img.shields.io/github/license/electric-eloquence/fp-uglify.svg
[license-url]: https://raw.githubusercontent.com/electric-eloquence/fp-uglify/master/LICENSE
