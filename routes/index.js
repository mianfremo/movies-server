'use strict'

const express = require('express');
const GenreController = require('../controllers/genre')
const ActorController = require('../controllers/actor')
const MovieController = require('../controllers/movie')
const api = express.Router();
// const auth = require('../middlewares/auth')

api.get('/actor', ActorController.getActors);
api.get('/actor/:actorId',ActorController.getActor);
api.post('/actor', ActorController.saveActor);
api.put('/actor/:actorId', ActorController.updateActor);
api.delete('/actor/:actorId', ActorController.deleteActor);

api.get('/genre', GenreController.getGenres);
api.get('/genre/:genreId',GenreController.getGenre);
api.post('/genre', GenreController.saveGenre);
api.put('/genre/:genreId', GenreController.updateGenre);
api.delete('/genre/:genreId', GenreController.deleteGenre);


api.get('/movie', MovieController.getMovies);
api.get('/movie/:movieId',MovieController.getMovie);
api.post('/movie', MovieController.saveMovie);
api.put('/movie/:movieId', MovieController.updateMovie);
api.delete('/movie/:movieId', MovieController.deleteMovie);



module.exports = api