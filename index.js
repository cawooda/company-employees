const mainMenu = require('./bin/menus/mainMenu');
const menu = require('./bin/menus/menu');
const handleMainMenu = require('./bin/handlers/handleMainMenu')

const mainMenuChoices = [
    "view all departments",
    "view all roles", 
    "view all employees", 
    "add a department", 
    "add a role", 
    "add an employee", 
    "update an employee role"
    ]; 

async function main() {
    const main = new mainMenu("Employee Tracker ->",mainMenuChoices);
    await main.run(handleMainMenu);
}

main();