const express = require('express');
const router = express.Router();

const User = require('../db/models/User.js')


/* GET pets home page. */
router.get('/', (req, res) => {
    const userId = req.params.userId
    User.findById(userId)
        .then((user) => {
            res.render('pets/index', {
                user,
                //pets: user.pets,
                //userName: user.firstname,
                userId,
                //petName: pet.name
            })
        })
        .catch((error) => {
            console.log(error)
        })
});

module.exports = router;
