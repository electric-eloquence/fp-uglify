# Uglify extension for Fepper client-side JavaScript

### Install

Add these tasks to `extend/contrib.js`

* Under gulp task 'contrib:static'
  * 'uglify'
* Under gulp task 'contrib:syncback'
  * 'uglify'

Running the `uglify` task will write the compressed JS to the `paths.source.jsBld` 
directory as defined in `patternlab-config.json`.
