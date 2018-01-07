const express = require('express');
const router = express.Router({ mergeParams: true });

const User = require('../db/models/User.js')

router.get('/new', (req, res) => {
    const userId = req.params.userId
    const petId = req.params.petId

    User.findById(userId)
        .then((user) => {
            const pet = user.pets.id(petId)

            res.render('images/new', {
                userId,
                pet,
            })
        })
        .catch((error) => { console.log(error) })
})

router.post('/', (req, res) => {
    const userId = req.params.userId
    const petId = req.params.petId

    const newImage = req.body

    User.findById(userId)
        .then((user) => {
            const pet = user.pets.id(petId)
            pet.images.push(newImage)

            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${userId}/pets/${petId}`)
        })
        .catch((error) => { console.log(error) })

})

router.get('/:imageId', (req, res) => {
    const userId = req.params.userId
    const petId = req.params.petId
    const imageId = req.params.imageId

    User.findById(userId)
        .then((user) => {
            const pet = user.pets.id(petId)
            const image = pet.images.id(imageId)

            res.render('images/show', {
                userId,
                pet,
                image,
            })
        })
        .catch((error) => { console.log(error) })
})

router.get('/:imageId/delete', (req, res) => {
    const userId = req.params.userId
    const petId = req.params.petId
    const imageId = req.params.imageId

    User.findById(userId)
        .then((user) => {
            const pet = user.pets.id(petId)
            pet.images.id(imageId).remove()

            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${userId}/pets/${petId}`)
        })
        .catch((error) => { console.log(error) })
})

module.exports = router;
