var express = require('express');
var app = express();

app.get('/', function (req, res) {
  // res.sendFile('editoutlets.html');
  // res.sendFile('editoutlts.html');
  // res.sendFile('editprofile.html');
  // res.sendFile('emailconfirm.html');
  // res.sendFile('forgot.html');
  // res.sendFile('friend_profile.html');
  // res.sendFile('friendslist.html');
  res.sendFile('home.html');
  // res.sendFile('landing.html');
  // res.sendFile('login.html');
  // res.sendFile('newuser.html');
  // res.sendFile('notifications.html');
  // res.sendFile('profile.html');
  // res.sendFile('skyrankingthing.html');
  // res.sendFile('upload.html');
  // res.sendFile('uploadtype.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});