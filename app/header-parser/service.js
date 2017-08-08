
var langParser = require('./lang-parser');
var osParser = require('./os-parser');

module.exports = function (request) {
  return {
    ip: request.connection.remoteAddress,
    lang: langParser(request.headers['accept-language']),
    os: osParser(request.headers['user-agent'])
  };
};
