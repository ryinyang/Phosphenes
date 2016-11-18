var fs = require('fs');

exports.view = function(req, res) {
	var myUploadsFile = fs.readFileSync("myUploads.json");
	var myUploadsObj = JSON.parse(myUploadsFile);
	res.render('upload', myUploadsObj);
};

exports.uploadPicture = function(req, res) {
	var myUploadsFile = fs.readFileSync("myUploads.json");
	var myUploadsObj = JSON.parse(myUploadsFile);
	var d = new Date();
	var dateStr = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();

	// console.log("Trying to add this:");
	// console.log(req.body.im);
	
	console.log(myUploadsObj.myUploads);


	myUploadsObj.myUploads.push({
		"date": dateStr,
		"img": req.body.im
	});
	console.log("\n\n\n" + myUploadsObj.myUploads);
	// us fs to read json and then write back once done.
	fs.writeFile('myUploads.json', JSON.stringify(myUploadsObj), function (err) {
		console.log(err);
	});
	res.render('uploadComplete');
}