var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '/')));

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on " + app.get('port'));
});