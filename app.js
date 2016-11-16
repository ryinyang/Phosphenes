
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var fs = require('file-system');
var mongoose = require('mongoose');

var home = require('./routes/home');
var feed = require('./routes/feed');
var profile = require('./routes/profile');
var quests = require('./routes/quests');
var myUploads = require('./routes/myUploads');
var upload = require('./routes/upload');

// Example route
// var user = require('./routes/user');

var app = express();


// app.engine('html', handlebars({extname:'html'}));
// app.set('view engine', 'html');
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', handlebars({extname:'html'}));
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', function(req,res){
	res.render('landing')
});
app.get('/home', home.view);
app.get('/profile', profile.view);
app.get('/myUploads', myUploads.view);
app.get('/quests', quests.view);
app.get('/feed', feed.view);
app.get('/settings', function(req,res){
	res.render('settings')
});
app.get('/login', function(req,res){
	res.render('login')
});
app.get('/upload', upload.view);
app.get('/uploadComplete', function(req,res){
	res.render('uploadComplete')
});
app.get('/newuser', function(req,res){
	res.render('newuser')
});
app.get('/landing', function(req,res){
	res.render('landing')
});
app.post('/upload/new', upload.uploadPicture);
// app.post('/upload/new', uploadHelper());
// Example route
// app.get('/users', user.list);




var imgPath = 'OutltsLogo.png';

var schema = ({
	img: {data: Buffer, contentType: String}
});

var model = mongoose.model('model', schema);

mongoose.connection.on('open', function(){
	console.log('mongo is open');
	var newPic = new model;
	newPic.img.data = fs.readFileSync(imgPath);
	newPic.contentType = 'image/png';
	newPic.save(function (err, newPic) {
		if (err) console.log(err);
		console.log('picture saved to mongo');

	});
});




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// function uploadHelper (req, res) {
// 	// Get the temporary location of the file
//     var tmp_path = req.files.thumbnail.path;
//     // Set where the file should actually exists - in this case it is in the "images" directory.
//     target_path = '/tmp/' + req.files.thumbnail.name;
//     // Move the file from the temporary location to the intended location
//     fs.rename(tmp_path, target_path, function(err) {
//         if (err)
//             throw err;
//         // Delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files.
//         fs.unlink(tmp_path, function() {
//             if (err)
//                 throw err;
//             //
//         });
//     });
// }

