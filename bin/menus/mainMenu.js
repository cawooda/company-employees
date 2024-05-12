const inquirer = require('inquirer');
const menu = require('./menu');

class mainMenu extends menu {
    constructor (menuTitle,choices) {
        super(menuTitle,choices);
    }    
}

module.exports = mainMenu;