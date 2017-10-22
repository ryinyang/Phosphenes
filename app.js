
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');


/* For AB Testing */
var home2 = require('./routes/home2');
var myUploads2 = require('./routes/myUploads2');
var profile2 = require('./routes/profile2');
var quests2 = require('./routes/quests2');
var upload2 = require('./routes/upload2');

var feed = require('./routes/feed');
var home = require('./routes/home');
var login = require('./routes/login');
var myUploads = require('./routes/myUploads');
var newUser = require('./routes/newUser');
var profile = require('./routes/profile');
var quests = require('./routes/quests');
var upload = require('./routes/upload');
//var datepicker = require('./routes/datepicker');
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
// app.post('/home', newUser.createUser);
app.get('/feed', feed.view);
app.get('/login', login.view);
app.get('/profile', profile.view);
app.get('/myUploads', myUploads.view);
app.get('/quests', quests.view);
app.get('/upload', upload.view);
//app.get('/datepicker',datepicker.view)
app.get('/settings', function(req,res){
	res.render('settings')
});
app.post('/uploadComplete', upload.uploadPicture);
app.get('/newUser', newUser.view);
// app.get('/newUser/createAccount', newUser.createAccount);
// app.post('/newUser/createAccount', newUser.createAccount);
app.get('/landing', function(req,res){
	res.render('landing')
});
app.get('/help', function(req,res) {
	res.render('help');
})

//new stuff
app.get('js/libs/modernizr-2.0.6.min.js', function(req, res, next) {
    res.render('modernizr-2.0.6.min.js');
});

// Example route
// app.get('/users', user.list);

/* For AB Testing */
app.get('/home2', home2.view);
app.get('/myUploads2', myUploads2.view);
app.get('/profile2', profile2.view);
app.get('./quests2', quests2.view);
app.get('./upload2', upload2.view);
app.post('/uploadComplete2', upload2.uploadPicture);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
