const form = require('./form');

class updateEmployee extends form {
    constructor (formTitle,questions,cb) {
        super(formTitle,questions,cb);
    }    
}

module.exports = updateEmployee;