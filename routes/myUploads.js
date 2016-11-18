var fs = require('fs');

exports.view = function(req, res) {
	var myUploads = fs.readFileSync('myUploads.json');
	myUploads = JSON.parse(myUploads);
	res.render('myUploads', myUploads);
};
