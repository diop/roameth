const db = require('../connection');

const queries = {

  getCities: () => {
    return db.any('SELECT * FROM cities')
  },

  getCityByID: (id) => {
    return db.any('SELECT * FROM cities WHERE id = $1', [id]);
  }
}

module.exports = queries;
