const express = require('express');
const router = express.Router({ mergeParams: true });

const User = require('../db/models/User.js')
const Pet = require('../db/models/Pets.js')

/* GET pets home page. */
router.get('/', (req, res) => {
    const userId = req.params.userId
    User.findById(userId)
        .then((user) => {
            res.render('pets/index', {
                userId,
                pets: user.pets,
                userName: user.firstname,
            })
        })
        .catch((error) => { console.log(error) })
});

router.get('/:petId/edit', (req, res) => {
    const userId = req.params.userId
    const petId = req.params.petId
    User.findById(userId)
        .then((user) => {
            const pet = user.pets.id(petId)
            res.render('pets/edit', {
                pet,
                user,
                userId,
                petId,
            })
        })
        .catch((error) => { console.log(error) })
})

router.get('/new', (req, res) => {
    const userId = req.params.userId
    res.render('pets/new', {
        userId,
    })
})

router.get('/:petId', (req, res) => {
    const userId = req.params.userId
    const petId = req.params.petId

    User.findById(userId)
        .then((user) => {
            const pet = user.pets.id(petId)
            res.render('pets/show', {
                userId,
                petId,
                pet,
            })
        })
        .catch((error) => { console.log(error) })
})

router.post('/', (req, res) => {
    const userId = req.params.userId
    const newPet = req.body

    User.findById(userId)
        .then((user) => {
            user.pets.push(newPet)
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${userId}/pets`)
        })
        .catch((error) => { console.log(error) })
})

router.put('/:petId', (req, res) => {
    const petId = req.params.petId
    const userId = req.params.userId

    const updatedPet = req.body

    User.findById(userId)
        .then((user) => {
            const originalPet = user.pets.id(petId)
            originalPet.name = updatedPet.name
            originalPet.age = updatedPet.age

            return user.save()
        })
        .then(() => {
            res.redirect(`${petId}`)
        })
        .catch((error) => { console.log(error) })
})

router.get('/:petId/delete', (req, res) => {
    const userId = req.params.userId
    const petId = req.params.petId

    User.findById(userId)
        .then((user) => {
            user.pets.id(petId).remove()
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${userId}/pets`)
        })
        .catch((error) => { console.log(error) })
})

module.exports = router;