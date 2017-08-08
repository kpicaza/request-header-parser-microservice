
var firstMatch = require('./first-match');

var regex = /([0-9]+\.)([0-9]+\.)([0-9]+\.)([0-9]+)/g;

module.exports = function (forwardedFor) {
  return firstMatch(forwardedFor, regex);
};
