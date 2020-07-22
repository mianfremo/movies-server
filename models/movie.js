'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Genre = mongoose.model('Genre')

var movieSchema = new Schema({
	title: String, 
	desc: String,
	genre: { type: Schema.ObjectId, ref: "Genre" },
	rate: Number,
	image: String


})

module.exports = mongoose.model("Movie", movieSchema)