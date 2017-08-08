
const regex = /\((.)+?\)/g;

module.exports = function (userAgent) {
  var matches = userAgent.match(regex);

  if (0 >= matches.length) {
    throw 'Invalid user agent given.';
  }

  var agent = matches[0].split('');
  agent.splice(0, 1);
  agent.pop();

  return agent.join('');
};
