var express = require('express');
var https = require('https');
var http = require('http');
var app = new express();
// this middleware will not allow the request to go beyond it
/*app.use(function(req, res, next) {
  res.send('Hello World');
});*/

// requests will never reach this route
app.get('/', function (req, res) {
  res.send('Welcome');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

console.log(__dirname);
app.listen(3000);