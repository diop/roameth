const express = require('express')

const sessionChecker = (request,response,next) => {
  if(!request.session.user && request.cookies.user_sid) {
    response.redirect('/login')
  } else {
    next()
  }
}

module.exports = sessionChecker
