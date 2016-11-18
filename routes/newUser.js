exports.view = function(req, res) {
	res.render('newUser');
}

exports.createAccount = function(req, res) {
	// var uname = $("#uname-input").val();
	// var pword1 = $("#pword-input1").val();
	// var pword2 = $("#pword-input2").val();
	var user = "{uname: " + req.query.username + "}," +
			   "{pword: " + req.query.password1 + "}";

	console.log(user);

	
}