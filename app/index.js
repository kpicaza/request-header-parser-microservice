var express = require('express');
var path = require('path');
var pug = require('pug');
var service = require('./header-parser/service');

var app = express();

app.get("/", function (request, response) {
  var view = pug.compileFile(path.resolve('views/index.pug'));

  response.send(view({example: JSON.stringify(service(request.headers))}));
});

app.get("/whoami", function (request, response) {
  response.send(JSON.stringify(service(request.headers)));
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

