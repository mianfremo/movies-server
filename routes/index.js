'use strict'
const app = require('../app');
const express = require('express')
const api = express.Router()
var Movie = require('../models/movie')

api.get('/movies', (req, res)=> {
	Movie.find({}, (err, movies)=> {
		res.status(200).send(movies)
	});
})


