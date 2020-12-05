'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, (err, res)=>{
	if(err){
		return `Error al conectarse a la base de datos: ${err}`
	}

	console.log("Conexion establecida");

	app.listen(config.port, ()=>{
		console.log(`Se ha iniciado el servidor en el puerto ${config.port}`);
	})

})


