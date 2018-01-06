const express = require('express');
const router = express.Router();
const User = require('../db/models/Pets.js')

/* GET home page. */
router.get('/', (req, res) => {
    res.render('pets/index');
});

module.exports = router;
