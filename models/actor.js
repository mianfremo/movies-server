'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var actorSchema = new Schema({
	name: String,
	birth: Date,
	oscars: Number
})

module.exports = mongoose.model("Actor", actorSchema)