
var firstMatch = require('./first-match');

module.exports = function (userAgent) {
  var regex = /\((.)+?\)/g;
  
  var match = firstMatch(userAgent, regex);

  if (null === match) {
    return match;
  }

  var os = match.split('');
  os.splice(0, 1);
  os.pop();

  return os.join('');
};
