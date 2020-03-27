# Uglify extension for Fepper client-side JavaScript

[![Known Vulnerabilities][snyk-image]][snyk-url]
[![Linux Build Status][linux-image]][linux-url]
[![Mac Build Status][mac-image]][mac-url]
[![Windows Build Status][windows-image]][windows-url]
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

[linux-image]: https://github.com/electric-eloquence/fp-uglify/workflows/Linux%20build/badge.svg?branch=master
[linux-url]: https://github.com/electric-eloquence/fp-uglify/actions?query=workflow%3A"Linux+build"

[mac-image]: https://github.com/electric-eloquence/fp-uglify/workflows/Mac%20build/badge.svg?branch=master
[mac-url]: https://github.com/electric-eloquence/fp-uglify/actions?query=workflow%3A"Mac+build"

[windows-image]: https://github.com/electric-eloquence/fp-uglify/workflows/Windows%20build/badge.svg?branch=master
[windows-url]: https://github.com/electric-eloquence/fp-uglify/actions?query=workflow%3A"Windows+build"

[coveralls-image]: https://img.shields.io/coveralls/electric-eloquence/fp-uglify/master.svg
[coveralls-url]: https://coveralls.io/r/electric-eloquence/fp-uglify

[license-image]: https://img.shields.io/github/license/electric-eloquence/fp-uglify.svg
[license-url]: https://raw.githubusercontent.com/electric-eloquence/fp-uglify/master/LICENSE
