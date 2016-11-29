//var loginDatabase = jQuery.getJSON("js/login.json");
var  data = [
		{
			"uname": "ryan",
			"pword": "yang"
		},
		{
			"uname": "raina",
			"pword": "puppers"
		}
	]

$(document).ready(function() {
	$("#login-btn").click(checkLogin);
	$("#create-btn").click(createAccount);
	$("#back-btn").click(backButton);
});

function backButton() {
	window.location.href = "/";
}

function checkLogin() {

	// Loop through the database and check for the correct uname/pword
	for (var i = data.length - 1; i >= 0; i--) {
		if ($("#uname-input").val() == data[i].uname && 
			$("#pword-input").val() == data[i].pword) {
			console.log("correct");
			window.location.href = "/home";
			return;
		}
	};
	alert("You've entered the incorrect username or password.");
}

function createAccount() {
	var errMsg = "";
	var uname = $("#uname-input").val();
	var pword1 = $("#pword-input1").val();
	var pword2 = $("#pword-input2").val();


	for (var i = data.length - 1; i >= 0; i--) {
		// Check for input
		if (uname == "") {
			errMsg += "You forgot to choose a username."
		}
		if (pword1 == "" || pword2 == "") {
			errMsg += "You left out one of the password fields."
		}
		// Check for duplicate username
		if (data[i].uname == uname) {
			errMsg += "This username is taken.\n";
		}
		// Check that passwords match
		if (pword1 != pword2) {
			errMsg += "Your passwords don't match.\n"
		}
		// Check for error messages and return if error
		if (errMsg != "") {
			alert(errMsg);
			return;
		}
		
		// Push new account into "database"
		// loginDatabase.responseJSON.push({
		// 	uname: uname,
		// 	pword: pword1
		// });
		// console.log(loginDatabase.responseJSON);
			window.location.href = "/home";
	};
}