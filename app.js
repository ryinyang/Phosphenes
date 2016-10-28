var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile('C:/Users/Ryan/Documents/Outlts/editprofile.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/editoutlts.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/editprofile.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/emailconfirm.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/forgot.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/friend_profile.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/friendslist.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/home.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/landing.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/login.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/newuser.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/notifications.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/profile.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/skyrankingthing.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/upload.html');
  res.sendFile('C:/Users/Ryan/Documents/Outlts/uploadtype.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});