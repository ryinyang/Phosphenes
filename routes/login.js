var fs = require("fs");

exports.view = function(req, res) {
	res.render("login");
}

exports.verify = function(req, res) {
	var loginFile = fs.readFileSync("login.json");
	var loginData = JSON.parse(loginFile);

	var unameIn = req.body.uname;
	var pwordIn = req.body.pword;

	console.log("username: " + unameIn);
	console.log("password: " + pwordIn);

	for (var i = loginData.users.length - 1; i >= 0; i--) {
		console.log("Checking: " + loginData.users[i].uname + " " + loginData.users[i].pword);
		if (loginData.users[i].uname == unameIn && 
			loginData.users[i].pword == pwordIn) {
			res.render("home");
		}
	};

	// alert("Your username or password don"t match our database");
	console.log("login failed");
	res.render("login");
}