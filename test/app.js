'use strict';
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;
var TestBase = require('../lib/index.js');

describe('yeoman-testbase', function () {
  describe('with testmode option set to true', function () {
    var instance;

    before(function (done) {
      var mainGenerator = TestBase.extend({
        constructor: function () {
          TestBase.apply(this, arguments);
        },
        default: function () {
          this.composeWith('testacular:app', {}, this.require('testacular/app'));
        }
      });

      instance = helpers.run(mainGenerator)
        .withGenerators([[helpers.createDummyGenerator(), 'testacular:app']])
        .withOptions({testmode: true})
        .withPrompts({someAnswer: true})
        .on('end', done);
    });

    it('has option testmode set to true', function () {
      assert.equal(instance.options.testmode, true);
    });
  });
});
