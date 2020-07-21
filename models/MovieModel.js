'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Genre = mongoose.model('Genre')

var MovieSchema = new Schema({
	title: String, 
	desc: String,
	genre: { type: Schema.ObjectId, ref: "Genre" } 


})

module.exports = mongoose.model("Movie", MovieSchema)