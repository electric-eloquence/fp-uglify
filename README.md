# Uglify extension for Fepper client-side JavaScript

[![Known Vulnerabilities][snyk-image]][snyk-url]
[![Mac/Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![License][license-image]][license-url]

### Install

```shell
cd extend
npm install --save-dev fp-uglify
```

### Use

Add these tasks to `extend/contrib.js`

* Under gulp task 'contrib:frontend-copy'
  * 'uglify'
* Under gulp task 'contrib:static'
  * 'uglify'

On the command line:

```shell
fp uglify
```

This extension minifies `.js` files in the `paths.source.jsSrc` directory as 
declared in `patternlab-config.json`. This minifies with 
<a href="https://github.com/mishoo/UglifyJS2" target="_blank">UglifyJS</a>, so 
ES6+ is _not_ supported.

Options can be set in `pref.yml` as per these examples:

```yaml
uglify:
  # Respects most options documented at
  # https://github.com/mishoo/UglifyJS2#minify-options
  # The sourceMap option is a little different.
  # Setting it to true writes default external sourcemaps,
  # one per `.js` file.
  # By default, external sourcemaps will take the name of
  # the `.js` file and append `.map`. 
  sourceMap: true
```

The following will write sourcemaps inline:

```yaml
uglify:
  sourceMap:
    url: inline
```

### Tasks

#### `'uglify'`
* Writes the minified JavaScript to the `paths.source.jsBld` directory as 
  declared in `patternlab-config.json`. The minified files will have 
  `.min.js` extensions.

[snyk-image]: https://snyk.io/test/github/electric-eloquence/fp-uglify/master/badge.svg
[snyk-url]: https://snyk.io/test/github/electric-eloquence/fp-uglify/master

[travis-image]: https://img.shields.io/travis/electric-eloquence/fp-uglify/master.svg?label=mac%20%26%20linux
[travis-url]: https://travis-ci.org/electric-eloquence/fp-uglify

[appveyor-image]: https://img.shields.io/appveyor/ci/e2tha-e/fp-uglify/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/e2tha-e/fp-uglify

[coveralls-image]: https://img.shields.io/coveralls/electric-eloquence/fp-uglify/master.svg
[coveralls-url]: https://coveralls.io/r/electric-eloquence/fp-uglify

[license-image]: https://img.shields.io/github/license/electric-eloquence/fp-uglify.svg
[license-url]: https://raw.githubusercontent.com/electric-eloquence/fp-uglify/master/LICENSE
