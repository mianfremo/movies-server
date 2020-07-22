'use strict'

const Genre = require('../models/genre')
const Movie = require('../models/movie')

function getMovies(req, res){
	Movie.find({}, (err, movies)=>{
		if(err){
			return res.status(500).send({message: `Error al realizar la peticion ${err}`})
		}
		if(!movies){
			return res.status(404).send({message:`No existen peliculas disponibles`})
		}

		return res.status(200).send({movies});	
	});
}

function getMovie(req, res){
	let movieId = req.params.movieId

	Movie.findById(movieId, (err, genre)=>{
		if(err){
			return res.status(500).send({message: `Error al realizar la peticion ${err}`})
		}
		if(!movie){
			return res.status(404).send({message:`No existe la pelicula`})
		}

		return res.status(200).send({movie})
	})

}

function saveMovie(req, res){
	let movie = new Movie()
	movie.title = req.body.title
	movie.desc = req.body.desc
	movie.rate = req.body.rate
	movie.genre = req.body.genre

	movie.save((err, saved)=>{
		if(err){
			return res.status(500).send(message: `Error al guardar la pelicula ${err}`)
		}

		return res.status(200).send(movie: saved)
		console.log("Pelicula guardada")
	})
}

function updateMovie(req, res){
	let movieId = req.params.movieId
	let update = req.body

	Movie.findByIdAndUpdate(movieId, update,(err, movieUpdated)=>{
		if(err){
			return res.status(500).send({message: `Error al actualizar la pelicula ${err}`})
		}
		return res.status(200).send({movie: movieUpdated})
	})
	
}

function deleteMovie(req,res){
	let movieId = req.params.movieId

	Movie.findById(movieId, (err,movie)=>{
		if(err) res.status(500).send({message:`Error al realizar la peticion: ${err}`});


		movie.remove(err =>{
			if(err) res.status(500).send({message:`Error al borrar la pelicula: ${err}`});
			res.status(200).send({message: "La pelicula ha sido eliminada"})
		})
	})
}

module.exports = {
	getGenre,
	getGenres,
	updateGenre,
	saveGenre,
	deleteGenre
}
