'use strict'

var mongoose = require('mongoose')

var Schema = mongoose.Schema

var genreSchema = new Schema({
	name: String
})

module.exports = mongoose.model("Genre", genreSchema);