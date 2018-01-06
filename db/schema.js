const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const ImageSchema = new Schema(
    {
        description: {
            type: String,
            required: [false]
        },
        imageUrl: {
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
        images: [ImageSchema]
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
        firstname: {
            type: String,
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
    ImageSchema
}