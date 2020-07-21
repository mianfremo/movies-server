'use strict'
require('./genre')

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Genre = mongoose.model('Genre')

var movieSchema = new Schema({
	title: String, 
	desc: String,
	genre: { type: Schema.ObjectId, ref: "Genre" } 


})

module.exports = mongoose.model("Movie", movieSchema)