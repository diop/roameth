const express = require('express')
const ejs = require('ejs')
const path = require('path')
const session = require('cookie-session')
const sessionChecker = require('./middlewares/sessionChecker')

const routes = require('./server/routes')
const errorhandler = require('./server/errorHandler')
const nofFound = require ('./server/notFound')

const web3 = require('web3')
const web3_provider = 'http://localhost:8545'
const _web3 = new web3()
_web3.setProvider(new web3.providers.HttpProvider(web3_provider))exports.web3 = _web3

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirnname, 'public')))

app.use(sessionChecker)

app.use(routes)
app.use(errorHandler)
app.use(notFound)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
