const express = require('express');
const router = express.Router();
const User = require('../db/models/Photos.js')

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('users/index');
});

module.exports = router;
