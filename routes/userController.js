var userModel = require("userModel.js").user;
console.log("imported users");

$(document).ready(function(){	
	console.log("doc ready");
	$("#login-btn").click(checkLogin);
	$("#create-btn").click(createAccount);
	$("#back-btn").click(backButton);
});

exports.createUser = function(res, req) {
	var newUser = new userModel.user({
		uname: "a",
		pword: "a",
		exp: 0,
		lvl: 1,
		posts: []
	});
	newUser.save(afterSaving);
	function afterSaving(err) {
		if (err) {
			console.log(err);
			res.send(500);
		}
		res.redirect("/");
	}
}