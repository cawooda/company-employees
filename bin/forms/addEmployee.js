const form = require('./form');

class addEmployee extends form {
    constructor (formTitle,questions,cb) {
        super(formTitle,questions,cb);
    }    
}

module.exports = addEmployee;