const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const urlEncodedParser = bodyParser.urlencoded({ extended: false })

router.route('/')

module.exports = router
