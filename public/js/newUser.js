// var loginDatabase = jQuery.getJSON("js/login.json");
// var fs = require('fs');

// $(document).ready(function(){
// 	$("#create-btn").click(createAccount);
// 	$("#back-btn").click(backButton);
// });

// function backButton(){
// 	window.location.href = "/";
// }

// function createAccount(){
// 	var data = loginDatabase.responseJSON;
// 	var errMsg = ""
// 	var uname = $("#uname-input").val();
// 	var pword1 = $("#pword-input1").val();
// 	var pword2 = $("#pword-input2").val();


// 	for (var i = data.length - 1; i >= 0; i--) {
// 		// Check for duplicate username
// 		if (data[i].uname == uname) {
// 			errMsg += "This username is taken.\n";
// 		}
// 		// Check that passwords match
// 		if (pword1 != pword2) {
// 			errMsg += "Your passwords don't match.\n"
// 		}
// 		// Check for error messages and return if error
// 		if (errMsg != "") {
// 			alert(errMsg);
// 			return;
// 		}
		
// 		loginDatabase.responseJSON.push({
// 			uname: uname,
// 			pword: pword1
// 		});
// 		console.log(loginDatabase.responseJSON);
// 	};
// }

$(document).ready(function() {
	$("#pword-input1, #pword-input2").keyup(verifyPasswords);
	// $("#uname-input").keyup(checkUsernameAvailability);
});

// function checkUsernameAvailability() {
// 	var file = $.getJSON("js/login.json");
// 	var data = file.users;
// 	var uname = $("#uname-input");

// 	console.log(file.users);

// 	for (var i = data.length - 1; i >= 0; i--) {
// 		if (uname == file.responseJSON[i].uname) {
// 			$("#usernameAvailability").html("That username is already taken!");
// 		} else {
// 			$("#usernameAvailability").html("");
// 		}
// 	};
// }

function verifyPasswords() {
	var p1 = $("#pword-input1").val();
	var p2 = $("#pword-input2").val();

	console.log('verify');

	if (p1 != p2) {
		$("#matchPasswords").html("Passwords don't match");
	} else {
		$("#matchPasswords").html("");
	}
}

function callbackFn() {
	console.log(loginDatabase);
}