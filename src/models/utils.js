const isEmtpy = (name, email, password) => {
  return (name === '' || password === '' || email === '')
}

module.exports = {
  isEmpty
}
