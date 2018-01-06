const mongoose = require('mongoose')
const Schema = require('../schema')

const Image = mongoose.model('Image', Schema.ImageSchema)

module.exports = Image