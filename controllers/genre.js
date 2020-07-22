'use strict'

const Genre = require('../models/genre')

function getGenres(req, res){
	Genre.find({}, (err, genres)=>{
		if(err){
			return res.status(500).send({message: `Error al realizar la peticion ${err}`})
		}
		if(!genres){
			return res.status(404).send({message:`No existen generos disponibles`})
		}

		return res.status(200).send({genres});	
	});
}

function getGenre(req, res){
	let genreId = req.params.genreId

	Genre.findById(genreId, (err, genre)=>{
		if(err){
			return res.status(500).send({message: `Error al realizar la peticion ${err}`})
		}
		if(!genre){
			return res.status(404).send({message:`No existe el genero`})
		}

		return res.status(200).send({genre})
	})

}

function saveGenre(req, res){
	let genre = new Genre()
	genre.name = req.body.name

	genre.save((err, saved)=>{
		if(err){
			return res.status(500).send(message: `Error al guardar el genero ${err}`)
		}

		return res.status(200).send(genre: saved)
		console.log("Genero guardado")
	})
}

function updateGenre(req, res){
	let genreId = req.params.genreId
	let update = req.body

	Genre.findByIdAndUpdate(genreId, update,(err, genreUpdated)=>{
		if(err){
			return res.status(500).send({message: `Error al actualizar el genero ${err}`})
		}
		return res.status(200).send({genre: genreUpdated})
	})
	
}

function deleteGenre(req,res){
	let genreId = req.params.genreId

	Genre.findById(genreId, (err,genre)=>{
		if(err) res.status(500).send({message:`Error al realizar la peticion: ${err}`});


		genre.remove(err =>{
			if(err) res.status(500).send({message:`Error al borrar el genero: ${err}`});
			res.status(200).send({message: "El genero ha sido eliminado"})
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
