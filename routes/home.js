var posts = require('../feed.json');

exports.view = function(req, res) {
	res.render('home', posts);
};
