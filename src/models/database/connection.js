const pgp = require('pg-promise')()

const dbName = 'roameth';
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`

const db = pgp(connectionString)

module.exports = db
