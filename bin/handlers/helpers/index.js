const pool = require('../../../config');

async function getEmployeeId() {

}

async function getDepartments(){
    
    await pool.connect();
try {
    var result = await pool.query(`
        SELECT id,name
        FROM departments
    `)

    } catch (error) {
        console.log("error", error);
    }
    return result.rows.map((item)=>{ 
        const choice = {   
            name: item.name,
            value: item.id
        }
        return choice;
        });
}

async function getRoles(){
    
    await pool.connect();
try {
    var result = await pool.query(`
        SELECT id,title
        FROM roles;
    `)

    } catch (error) {
        console.log("error", error);
    }
    return result.rows.map((item)=>{ 
        const choice = {   
            name: item.title,
            value: item.id
        }
        return choice;
        });
}

async function getEmployees(){
    
    await pool.connect();
try {
    var result = await pool.query(`
        SELECT id, CONCAT(first_name, ' ', last_name) as name
        FROM employees;
    `)

    } catch (error) {
        console.log("error", error);
    }
    return result.rows.map((item)=>{ 
        const choice = {   
            name: item.name,
            value: item.id
        }
        
        return choice;
        });
}

module.exports = {getDepartments,getEmployees,getRoles};