
require('dotenv').config();
const { Pool } = require('pg');

console.log(__dirname);
const DIRECTORY = __dirname;

const pool = new Pool(
    {
      user: process.env.DB_USERNAME,
      // TODO: Enter PostgreSQL password
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE
    },
    console.log(`Connected to the books_db database.`)
  )



module.exports = pool;