const express = require('express');
const router = express.Router();
const User = require('../db/models/User.js')

/* GET home page. */
router.get('/', (req, res) => {
  User.find({})
    .then((users) => {
      res.render('users/index', {
        users,
        bannerTitle: 'Index'
      })
    })
    .catch((error) => { console.log(error) })
})

router.get('/new', (req, res) => {
  res.render('users/new', { bannerTitle: 'New User' })
})

router.post('/', (req, res) => {
  const newUser = req.body
  User.create(newUser)
    .then(() => {
      res.redirect('/users')
    })
    .catch((error) => { console.log(error) })
})

router.get('/:userId', (req, res) => {
  const userId = req.params.userId
  User.findById(userId)
    .then((user) => {
      res.render('users/show', {
        user,
        bannerTitle: user.username
      })
    })
    .catch((error) => { console.log(error) })
})

router.get('/:userId/edit', (req, res) => {
  const userId = req.params.userId

  User.findById(userId)
    .then((user) => {
      res.render('users/edit', {
        user,
        bannerTitle: 'edit page'
      })
    })
    .catch((error) => { console.log(error) })
})

router.get('/:userId/delete', (req, res) => {
  const userId = req.params.userId

  User.findByIdAndRemove(userId)
    .then(() => {
      res.redirect('/users')
    })
    .catch((error) => { console.log(error) })
})

router.put('/:userId', (req, res) => {
  const userId = req.params.userId
  const updatedUserInfo = req.body

  User.findByIdAndUpdate(userId, updatedUserInfo, { new: true })
    .then(() => {
      res.redirect(`/users/${userId}`)
    })
    .catch((error) => { console.log(error) })
})


module.exports = router;
