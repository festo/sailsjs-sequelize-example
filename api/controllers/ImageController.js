/**
 * ImageController
 *
 * @description :: Server-side logic for managing images
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res) {
		Image.findAll({
			include: [
				{model: User}
			]
		}).then(function(images) {
			res.json(images);
		}).catch(function(err) {
			res.json(err);
		});
	}
};

