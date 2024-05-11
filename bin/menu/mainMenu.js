const fs = require('fs');
const inquirer = require('inquirer');
const handleMainMenu = require('../handlers/handleMainMenu');

const mainMenuOptions = [
    "view all departments",
    "view all roles", 
    "view all employees", 
    "add a department", 
    "add a role", 
    "add an employee", 
    "update an employee role"
    ]

const menuQuestion = [
    ["list","Employee Tracker>", "userChoice", mainMenuOptions]
    ]

const mainMenu = async () => {
    const questionList = menuQuestion.map((question)=>{
            return {
                type : question[0],
                message : question[1],
                name: question[2],
                choices : question[3]
            }
        })
    const data = await inquirer.prompt(questionList);
    console.log(data.userChoice);
    
    handleMainMenu(data.userChoice);
}   

module.exports = mainMenu;