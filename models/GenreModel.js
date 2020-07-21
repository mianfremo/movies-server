'use strict'

var mongoose = require('mongoose')

var Schema = mongoose.schema

var GenreSchema = new Schema({
	name: String
})

module.exports = mongoose.model("Genre", GenreSchema);