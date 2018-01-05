const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const PhotoSchema = new Schema(
    {
        description: {
            type: String,
            required: [false]
        },
        photoUrl: {
            type: String,
            required: [true, `Please post a link to your pet's picture.`]
        },
    },
    {
        timestamps: {}
    }
)

const PetSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, `You need to enter your pet's name.`]
        },
        age: {
            type: Number,
        },
        photos: [PhotoSchema]
    },
    {
        timestamps: {}
    }
)

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'You need to enter a username.']
        },
        password: {
            type: String,
            required: [true, 'You need to enter a password.']
        },
        pets: [PetSchema]
    },
    {
        timestamps: {}
    }
)

module.exports = {
    UserSchema,
    PetSchema,
    PhotoSchema
}