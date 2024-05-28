const inquirer = require('inquirer');
const {addDepartment,addRole,addEmployee} = require('../../forms/index');
const {getDepartments,getEmployees,getRoles} = require('../helpers');

const pool = require('../../../config');

async function handleAddDepartment (then){
    
    //formTitle,questions,cb
    const form = new addDepartment('Add Department',[{
        title: 'Department Name',
        name: 'department_name'        
    }],(data)=>{
        pool.connect();
        try {
            
            pool.query(`
                INSERT into departments (name)
                VALUES ($1);
            `,[data.department_name],(err,{rows})=>{ 
                
            });
        } catch (error) {
            console.log("error", error);
        }    
    })
    await form.run();
    
    

}

async function handleAddEmployee (){
    

    const form = new addEmployee('Add Employee',[
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
            try {
                pool.query(`
                    INSERT into employees (first_name,last_name,role_id,manager_id)
                    VALUES ($1,$2,$3,$4);
                `,[data.first_name,data.last_name,data.role,data.manager],(err,{rows})=>{ 
                    
                });
                console.log('Employee Successfully Added');
            } catch (error) {
                console.log("error", error);
            }    
        });
    await form.run();
}

async function handleAddRole (){
    
    
    
    const form = new addRole('Add Role',[
        {
            title: 'Role Title:',
            name: 'title'        
        },
        {
            title : 'Salary:',
            name : 'salary' 
        },
        {
            title : 'Department',
            name : 'department_id',
            type: 'list',
            choices: await getDepartments() 
        }
    ],
        (data)=>{
            pool.connect();
            try {
                pool.query(`
                    INSERT into roles (title, salary, department_id)
                    VALUES ($1,$2,$3);
                `,[data.title,data.salary,data.department_id],(err,{rows})=>{ 
                    
                });
                console.log('Role Successfully Added');
            } catch (error) {
                console.log("error", error);
            }    
        });
    await form.run();

}

module.exports = {handleAddDepartment,handleAddEmployee,handleAddRole};


// case "add a department": handleAddDepartment();
// break;    
// case "add an employee": handleAddEmployee();
// break;  
// case "add a role": handleAddRole();