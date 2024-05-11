const mainMenu = require('./bin/menu/mainMenu');
const viewAllDepartments = require('./bin/handlers/view/view');


async function main() {
    await mainMenu();
}

main()