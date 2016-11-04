// var quests = require('../json/questDatabase2.json');

exports.view = function(req, res) {
	res.render('home', quests);
	console.log(quests);
};