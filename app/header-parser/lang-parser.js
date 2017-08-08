
const regex = /((([a-z])+-([A-Z])+)|(([a-z])+))/g;

module.exports = function (acceptLanguage) {
  var matches = regex.exec(acceptLanguage);

  if (0 >= matches.length) {
    throw 'Invalid accept language given.';
  }

  return matches[0];
};
