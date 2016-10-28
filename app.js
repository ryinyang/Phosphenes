var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname +'/static/home.html');
  res.sendFile(__dirname +'/static/editprofile.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});