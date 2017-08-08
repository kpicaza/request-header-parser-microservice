
var firstMatch = require('./first-match');

module.exports = function (acceptLanguage) {
  var regex = /(([a-z])+-([A-Z])+)/g;

  return firstMatch(acceptLanguage, regex);
};
