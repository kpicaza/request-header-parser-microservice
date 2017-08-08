
var firstMatch = require('./first-match');

var regex = /(([a-z])+-([A-Z])+)/g;

module.exports = function (acceptLanguage) {
  return firstMatch(acceptLanguage, regex);
};
