'use strict'

const express = require('express');
const cors = require('cors');
const GenreController = require('../controllers/genre')
const ActorController = require('../controllers/actor')
const MovieController = require('../controllers/movie')
const api = express.Router();
// const auth = require('../middlewares/auth')

var corsOptions = {
  origin: "*"
}


api.get('/actor', cors(corsOptions) ,ActorController.getActors);
api.get('/actor/:actorId',ActorController.getActor);
api.post('/actor',cors(corsOptions) , ActorController.saveActor);
api.put('/actor/:actorId', ActorController.updateActor);
api.delete('/actor/:actorId', ActorController.deleteActor);

api.get('/genre', cors(corsOptions),GenreController.getGenres);
api.get('/genre/:genreId',GenreController.getGenre);
api.post('/genre', cors(corsOptions) , GenreController.saveGenre);
api.put('/genre/:genreId', cors(corsOptions) , GenreController.updateGenre);
api.delete('/genre/:genreId', GenreController.deleteGenre);


api.get('/movie',cors(corsOptions), MovieController.getMovies);
api.get('/movie/:movieId',cors(corsOptions),MovieController.getMovie);
api.post('/movie', MovieController.saveMovie);
api.put('/movie/:movieId', MovieController.updateMovie);
api.delete('/movie/:movieId', MovieController.deleteMovie);



module.exports = api
