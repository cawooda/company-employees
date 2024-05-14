
require('dotenv').config();

// const pool = require('../../../config/connection');
const pool = require('@config/connection');


console.log("pool",pool);
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