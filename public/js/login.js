var loginDatabase = jQuery.getJSON("js/login.json");

$(document).ready(function(){
	$("#login-btn").click(checkLogin);
	$("#back-btn").click(backButton);
});

function backButton(){
	window.location.href = "/";
}

function checkLogin(){

	// Look at only the array of the json
	data = loginDatabase.responseJSON;

	// Loop through the database and check for the correct uname/pword
	for (var i = data.length - 1; i >= 0; i--) {
		if ($("#uname-input").val() == data[i].uname && 
			$("#pword-input").val() == data[i].pword) {
			console.log("correct");
			window.location.href = "/home";
			return;
		}
	};
	alert("You've entered the incorrect uname or password.");
}