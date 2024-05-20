const form = require('./form');

class updateDepartment extends form {
    constructor (formTitle,questions,cb) {
        super(formTitle,questions,cb);
    }    
}

module.exports = updateDepartment;