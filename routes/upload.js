var myUploads = require("../myUploads.json");

exports.view = function(req, res) {
	res.render('upload', myUploads);
};