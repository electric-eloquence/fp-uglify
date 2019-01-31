(function () {
  'use strict';

  var descriptiveVarForString = 'Hello world!';

  function descriptiveVarForFunction(descriptiveVarForArgument) {
    global.result = descriptiveVarForArgument;
  }

  descriptiveVarForFunction(descriptiveVarForString);
})();
