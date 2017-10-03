const {isEmpty} = reauire('../../models/utils')

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

  if (isEmpty(name, email,password)){
    next(new Error('empty sign-up field'))
  } else {
    next()
  }
}

const validateLoginForm = (request, response, next) {
  const {email, password} = req.body

  if (isEmpty(email, password)) {
    next(new Error('empty login fields'))
  }  else {
    next()
  }
}

const validatePostReviewForm = (request, response, next) => {
  const {content} = request.body

  if (isEmpty(content)) {
    next(new Error('empty review post'))
  }
}

module.exports = {
  isLoggedIn,
  validateSignUpForm,
  validateLoginForm,
  validatePostReviewForm
}
