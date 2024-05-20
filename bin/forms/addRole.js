const form = require('./form');

class addRole extends form {
    constructor (formTitle,questions,cb) {
        super(formTitle,questions,cb);
    }    
}

module.exports = addRole;