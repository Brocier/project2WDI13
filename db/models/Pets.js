const mongoose = require('mongoose')
const Schema = require('../schema')

const Pet = mongoose.model('Pet', Schema.PetSchema)

module.exports = Pet