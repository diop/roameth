const express = require('express')
const router = express.Router()
const cities = require('../../models/cities')
const reviews = require('../../models/reviews')
const { isLoggedIn } = require('../middlewares/validation')

router.get('/', isLoggegIn, (request, response) => {
  Promise.all([cities.get(), reviews.getThreeNewest()])
    .then([cities, reviews]) => {
      response.render('index', {cities, reviews, loggedIn: request.isLoggedIn})
    })
    .catch((err) => {
      response.status(500).render('error', { error: err})
    })
})

module.exports = router
