const pool = require('../../../config');
const {getEmployees,getRoles,getDepartments} = require('../helpers');
const updateEmployee = require('../../forms/updateEmployee');

const inquirer = require('inquirer');

async function handleUpdateEmployee (){
    console.log("add employee reached");
    
    const employees = await getEmployees();
    console.log(employees);
    const form = new updateEmployee('Add Employee',[
        {
            title: 'Select Employee',
            name: 'employee',
            type: 'list',
            choices: employees  
        },
        {
            title: 'Emloyee First Name:',
            name: 'first_name'        
        },
        {
            title : 'Employee Last Name:',
            name : 'last_name' 
        },
        {
            title : 'Employee Role:',
            name : 'role',
            type : 'list',
            choices: await getRoles()
        },
        {
            title : 'Employee Manager:',
            name : 'manager',
            type : 'list',
            choices: await getEmployees()
        }
    ],
        (data)=>{
            pool.connect();
            console.log(data.first_name,data.last_name,data.role,data.manager,data.employee);
            try {
                pool.query(`
                    UPDATE employees SET first_name = $1, last_name = $2,role_id = $3,manager_id=$4
                    WHERE id = $5
                `,[data.first_name,data.last_name,data.role,data.manager,data.employee],(err,{rows})=>{ 
                    
                });
                console.log('Employee Successfully Updated');
            } catch (error) {
                console.log("error", error);
            }    
        });
    await form.run();
}

module.exports = handleUpdateEmployee;