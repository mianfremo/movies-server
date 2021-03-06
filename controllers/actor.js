'use strict'

const Movie = require('../models/movie')
const Actor = require('../models/actor')

function getActors(req, res){
	Actor
	.find({})
	.exec((err, actors)=> {
		if(err){
				return res.status(500).send({message: `Error al realizar la peticion ${err}`})
		}
		if(!actors){
			return res.status(404).send({message:`No existen actores disponibles`})
		}

		return res.status(200).send({actors});	
	})
}

function getActor(req, res){
	let actorId = req.params.actorId

	Actor
	.findById(actorId)
	.exec((err, actor)=> {
		if(err){
				return res.status(500).send({message: `Error al realizar la peticion ${err}`})
		}
		if(!actor){
			return res.status(404).send({message:`No existe el actor`})
		}

		return res.status(200).send({actor});	
	})

}

function saveActor(req, res){
	let actor = new Actor()
	actor.name = req.body.name
	actor.birth = req.body.birth
	actor.oscars = req.body.oscars

	if(req.body.movies !== undefined){
		actor.movies = req.body.movies.split(",")
	}
	


	actor
	.save((err,saved)=>{
		if(err){
			return res.status(500).send({message: `Error al guardar el actor ${err}`})
		}

		return res.status(200).send({actor: saved})
		console.log("Actor guardado")
	})
}

function updateActor(req, res){
	let actorId = req.params.actorId
	req.body.movies = req.body.movies.split(",")
	let update = req.body

	Actor
	.findByIdAndUpdate(actorId,update)
	.exec((err, actorUpdated)=>{
		if(err){
			return res.status(500).send({message: `Error al actualizar el actor ${err}`})
		}
		return res.status(200).send({actor: actorUpdated})
	})
	
}

function deleteActor(req,res){
	let actorId = req.params.actorId

	Actor
	.findById(actorId)
	.exec((err, actor)=>{
		if(err){
			return res.status(500).send({message: `Error al realizar la peticion ${err}`})
		}

		actor.remove(err=>{
			if(err) res.status(500).send({message:`Error al borrar el actor: ${err}`});
			res.status(200).send({message: "El actor ha sido eliminado"})
		})
	})
}

module.exports = {
	getActor,
	getActors,
	updateActor,
	saveActor,
	deleteActor
}
