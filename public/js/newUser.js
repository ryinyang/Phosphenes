var loginDatabase = jQuery.getJSON("js/login.json");

$(document).ready(function(){
	$("#create-btn").click(createAccount);
	$("#back-btn").click(backButton);
});

function backButton(){
	window.location.href = "/";
}

function createAccount(){
	var data = loginDatabase.responseJSON;
	var errMsg = ""
	var uname = $("#uname-input").val();
	var pword1 = $("#pword-input1").val();
	var pword2 = $("#pword-input2").val();


	for (var i = data.length - 1; i >= 0; i--) {
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
		
		loginDatabase.responseJSON.push({
			uname: uname,
			pword: pword1
		});
		console.log(loginDatabase.responseJSON);
	};
}