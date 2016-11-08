var achievements = require("../achievementDatabase.json");

exports.view = function(req, res) {
	res.render('profile', achievements);
};
