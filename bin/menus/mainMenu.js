
const menu = require('./menu');

class mainMenu extends menu {
    constructor (menuTitle,choices,cb) {
        super(menuTitle,choices);
    }    
}

module.exports = mainMenu;