var achievements = require("../achievementDatabase.json");
var currIndex = 0;


exports.view = function(req, res) {
	res.render('profile', achievements);
};



// $('#achievement1').click(appendPopup);
// function appendPopup(event) {
// 	document.body.innerHTML +=
// 		"<div id="popup1" class="overlay">
// 			<div class="popup">
// 				<h2>Here i am</h2>
// 				<a class="close" href="#">&times;</a>
// 				<div class="content">
// 					Thank to pop me out of that button, but now i'm done so you can close this window.
// 				</div>
// 			</div>
// 		</div>"
// }