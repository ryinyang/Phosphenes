var fs = require('fs');
var posts = require('../feed.json');

exports.view = function(req, res) {
	res.render('newUser');
}

exports.createUser = function(req, res) {
	var uname = req.body.username;
	var pword = req.body.password1;
	var file = fs.readFileSync("login.json");
	var data = JSON.parse(file);

	data.users.push({
		"uname": uname,
		"pword": pword
	});

	fs.writeFile('login.json', JSON.stringify(data), function (err) {
		console.log(err);
	});

	res.render('home', posts);
}