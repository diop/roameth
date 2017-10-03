const {isEmpty} = require('../../models/utils')

const isLoggedIn = (request, response, next) => {
  if (!request.session.user) {
    request.isLoggedIn = false
  } else if (request.session.user) {
    request.isLoggedIn = true
  }
  next()
}

const validateSignUpForm = (request, response, next) => {
  const {ermail, password} = request.body
  isEmpty(name, email,password) ? next(new Error('empty sign-up field')) : next()
}

const validateLoginForm = (request, response, next) => {
  const {email, password} = req.body
  isEmpty(email, password)) ? next(new Error('empty login fields')) : next()
}

const validatePostReviewForm = (request, response, next) => {
  const {content} = request.body
  isEmpty(content)) ? next(new Error('empty review post')) : next()
  }
}

module.exports = {
  isLoggedIn,
  validateSignUpForm,
  validateLoginForm,
  validatePostReviewForm
}
