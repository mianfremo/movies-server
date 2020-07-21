'use strict'

const Genre = require('../models/genre')

function getGenres(res, req){
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

