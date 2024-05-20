const fs = require('fs');
const inquirer = require('inquirer');
const {handleAddDepartment,handleAddEmployee,handleAddRole} = require('./add/add');
const handleUpdateEmployee = require('./update/update');
const {viewAllDepartments, viewAllRoles,viewAllEmployees} = require('./view/view');

async function handleMainMenu (choice,cb) {
    switch (choice) {
        case "view all departments": viewAllDepartments();
            break;    
        case "view all roles": viewAllRoles();
            break;    
        case "view all employees": viewAllEmployees();
            break;    
        case "add a department": {
                await handleAddDepartment();
            }
            break;    
        case "add an employee": {
                await handleAddEmployee();
            }
            break;  
        case "add a role": {
            await handleAddRole();
        }
            break;      
        case "update an employee": 
        {
            await handleUpdateEmployee();
        }
            break;    
        default:
            break;
    }

    cb();
    
}


module.exports = handleMainMenu;
