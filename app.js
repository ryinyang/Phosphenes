var express = require('express');
var app = express();
var home = require('./static/js/home');
// Tell express that the html files are located in a specific directory
app.set('views', __dirname + '/static');
// Render the html files with view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// Tell express where the images are
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
	res.render("landing");
});
app.get('/', home.view);

app.listen(process.env.PORT || 3000, function () {
	console.log('App listening on port 3000!');
});