const fs = require('fs');
const inquirer = require('inquirer');

class menu {
    constructor (menuTitle,choices,cb) {
        this.endAndStartAgain = cb;
        this.choices = choices;
        this.menuQuestion = {
                type : "list",
                message : menuTitle,
                name: "userChoice",
                choices : choices
        }
    }
    async run (cbHandle,then) {
        const data = await inquirer.prompt(this.menuQuestion);
        await cbHandle(data.userChoice,then);
        
    }
}





const mainMenu = async (cb) => {
    
    
}   

module.exports = menu;



// A menu has a list of options
// A menu has a resultant choice
// 