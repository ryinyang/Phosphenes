var quests = require('../questDatabase.json');

exports.view = function(req, res) {
	res.render('quests', quests);
};
