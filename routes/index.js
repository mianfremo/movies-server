'use strict'
const app = require('./app');
const api = app.router()

api.get('/movies', function(req, res) {
	Movie.find({}, function(err, movies) {
		res.status(200).send(movies)
	});
})


