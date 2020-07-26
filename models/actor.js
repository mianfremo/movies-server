'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
var Movie = mongoose.model('Movie')

var actorSchema = new Schema({
	name: String,
	birth: Date,
	oscars: Number,
	movies: [{type: Schema.ObjectId, ref: "Movie"}]
})

module.exports = mongoose.model("Actor", actorSchema)