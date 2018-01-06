const express = require('express');
const router = express.Router({ mergeParams: true });

const User = require('../db/models/User.js')

/* GET pets home page. */
router.get('/', (req, res) => {
    const userId = req.params.userId
    User.findById(userId)
        .then((user) => {
            res.render('pets/index', {
                userId,
                user,
                pets: user.pets,
                userName: user.firstname,
            })
        })
        .catch((error) => { console.log(error) })
});


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
            res.render('stores/show', {
                userId,
                pet,
            })
        })
        .catch((error) => { console.log(error) })
})

module.exports = router;
