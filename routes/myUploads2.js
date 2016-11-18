var myUploads = require('../myUploads.json');

exports.view = function(req, res) {
	res.render('myUploadss', myUploads);
};
