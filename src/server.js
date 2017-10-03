const express = require('express')
const ejs = require('ejs')
const path = require('path')
const session = require('cookie-session')
const {isLoggedIn} = require('./server/middlewares/validation')

const routes = require('./server/routes')
const errorhandler = require('./server/errorHandler')
const nofFound = require ('./server/notFound')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirnname, 'public')))

app.use(routes)
app.use(errorHandler)
app.use(notFound)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
