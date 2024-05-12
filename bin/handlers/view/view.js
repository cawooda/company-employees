
require('dotenv').config();
const { Pool } = require('pg');


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

function viewAllDepartments () {
    pool.connect();
    pool.query(`SELECT * from departments`, (err, {rows}) => {
        if (err) {
          console.log(err);
        }
        console.log(rows);
      });
}

function viewAllRoles () {
    console.log("view all roles reached");
}

function viewAllEmployees () {
    console.log("view all employees reached");
}


module.exports = {viewAllDepartments, viewAllRoles,viewAllEmployees};