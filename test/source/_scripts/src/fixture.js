var root = (typeof global === 'object') ? global : window;
var descriptiveVarForString = 'fixture.js.map';
root.sourcemaps = root.sourcemaps || {};
root.sourcemaps['fixture.min.js'] = descriptiveVarForString;
