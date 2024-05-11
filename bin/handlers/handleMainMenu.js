const fs = require('fs');
const inquirer = require('inquirer');
const {handleAddDepartment,handleAddEmployee,handleAddRole} = require('./add/add');
const {handleUpdateDepartment} = require('./update/update');
const {viewAllDepartments, viewAllRoles,viewAllEmployees} = require('./view/view');

async function handleMainMenu (choice) {
    switch (choice) {
        case "view all departments": viewAllDepartments();
            break;    
        case "view all roles": viewAllRoles();
            break;    
        case "view all employees": viewAllEmployees();
            break;    
        case "add a department": handleAddDepartment();
            break;    
        case "add an employee": handleAddEmployee();
            break;  
        case "add a role": handleAddRole();
            break;      
        case "update an employee role": handleUpdateDepartment();
            break;    
        default:
            break;
    }
}


module.exports = handleMainMenu;
