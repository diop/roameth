const isLoggedIn = () => {
  if (!req.session.user) {
    req.isLoggedIn = false
  } else if (req.session.user) {
    req.isLoggedIn = true
  }
  next()
}

module.exports = isLoggedIn
