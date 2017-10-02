const express = require('express')
const router = express.Router()
const morgan = require('morgan')

const home = require('./routes/index')
const albums = require('./routes/cities')
const users = require('./routes/users')
const authentication = require('./routes/authentication')
const reviews = require('./routes/reviews')

router.use(home)
router.use('/cities', cities)
router.use(authentication)
router.use('/users', users)
router.use('/reviews', reviews)

module.exports = router;
