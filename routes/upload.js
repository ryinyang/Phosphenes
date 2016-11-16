var myUploads = require("../myUploads.json");

exports.view = function(req, res) {
	res.render('upload', myUploads);
};

exports.uploadPicture = function(req, res) {
    console.log(req.files);
}