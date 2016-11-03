var express = require('express');
var app = express();
// Tell express that the html files are located in a specific directory
app.set('views', __dirname + '/static');
// Render the html files with view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// Tell express where the images are
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
	res.render("landing");
	// res.sendFile(__dirname +'/static/home.html');
	// res.sendFile(__dirname +'/static/editprofile.html');
});

app.listen(process.env.PORT || 3000, function () {
	console.log('App listening on port 3000!');
});