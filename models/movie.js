'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Genre = mongoose.model('Genre')

var movieSchema = new Schema({
	title: String, 
	desc: String,
	genre: { type: Schema.ObjectId, ref: "Genre" },
	rate: Number,
	image: String,
	actors: [{type: Schema.ObjectId, ref: "Actor"}]


})

module.exports = mongoose.model("Movie", movieSchema)