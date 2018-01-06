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
        .catch((error) => {
            console.log(error)
        })
});

router.get('/new', (req, res) => {
    const userId = req.params.userId
    res.render('pets/new', {
        userId,
    })
})

module.exports = router;
