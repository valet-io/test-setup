// Use chai-as-promised for promise assertions and attach the expect globally
var chai = require('chai');
chai
  .use(require('chai-as-promised'))
  .use(require('sinon-chai'));
global.expect = chai.expect;

// Set up sinon
var sinon = require('sinon');
global.sinon = sinon;

var Promise;

// If bluebird is available, enable long stack traces and throw unhandled rejections
// Also load sinon-as-promised to enable promise stubs
try {
  Promise = require('bluebird');
} catch (e) {};

if (Promise) {
  Promise.longStackTraces();
  Promise.onPossiblyUnhandledRejection(function (err) {
    throw err;
  });
  require('sinon-as-promised')(Promise);
}