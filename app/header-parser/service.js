
var ipParser = require('./ip-parser');
var langParser = require('./lang-parser');
var osParser = require('./os-parser');

module.exports = function (headers) {
  return {
    ip: ipParser(headers['x-forwarded-for']),
    lang: langParser(headers['accept-language']),
    os: osParser(headers['user-agent'])
  };
};
