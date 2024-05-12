const fs = require('fs');
const inquirer = require('inquirer');

class menu {
    constructor (menuTitle,choices) {
        this.choices = choices;
        this.menuQuestion = {
                type : "list",
                message : menuTitle,
                name: "userChoice",
                choices : choices
        }
    }
    async run (cb) {
        const data = await inquirer.prompt(this.menuQuestion);
        cb(data.userChoice);
    }
}





const mainMenu = async (cb) => {
    
    
}   

module.exports = menu;



// A menu has a list of options
// A menu has a resultant choice
// 