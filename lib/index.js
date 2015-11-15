'use strict';
var yeoman = require('yeoman-generator');

// test assets base generator
module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    // generator setup
    yeoman.generators.Base.apply(this, arguments);

    // add the test mode option
    this.option('testmode');
  },

  // require wrapper so we consider the test mode option
  require: function (genPath) {
    return this.options.testmode ? null : {local: require.resolve(genPath)};
  }
});
