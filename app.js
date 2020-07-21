const express = require('express');
const app = express();
var Movie = require('./models/movie')
// const router = express.Router()

app.get('/movies', (req, res)=> {
	Movie.find({}, (err, movies)=> {
		res.status(200).send(movies)
	});
})



module.exports = app