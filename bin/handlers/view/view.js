// require('dotenv').config();
const pool = require('../../../config');


const showTable = require('./viewHelpers');


async function viewAllDepartments () {
    pool.connect();
    try {
        pool.query(`
            SELECT d.id,d.name
            FROM departments AS d
        `,(err,{rows})=>{
            
            showTable(rows);
            console.log('press <DOWN ARROW> for Menu');    
        });
        
        
    } catch (error) {
        console.log("error", error);
    }
    
}


function viewAllRoles () {
    pool.connect();
    
    try {
        pool.query(`
        SELECT 
            r.id,r.title,d.name,r.salary
            FROM 
                roles AS r 
        JOIN 
            departments AS d 
            ON 
                r.department_id = d.id;
        `,(err,{rows})=>{
            
            showTable(rows);
            console.log('press <DOWN ARROW> for Menu');    
        });
        
        
    } catch (error) {
        console.log("error", error);
    }
    
}

function viewAllEmployees () {
    console.log("view Emp reached");
    pool.connect();
    try {
        pool.query(`
        SELECT 
            e.id,
            e.first_name,
            e.last_name, 
            r.title AS role_title,
            d.name AS department_name, 
            r.salary, 
        CONCAT(m.first_name, ' ', m.last_name) AS manager_name
        FROM 
            employees AS e 
        JOIN 
            roles AS r ON e.role_id = r.id
        JOIN departments AS d ON r.department_id = d.id
        LEFT JOIN 
            employees AS m ON e.manager_id = m.id
        `,(err,{rows})=>{
            console.log('\n');
            showTable(rows);
            console.log('press <DOWN ARROW> for Menu');    
        });
        
        
    } catch (error) {
        console.log("error", error);
    }
 
}



module.exports = {viewAllDepartments, viewAllRoles,viewAllEmployees};