const fs = require('fs');
const inquirer = require('inquirer');

class form {
    constructor (formTitle,questions,cb) {
        //accepts a list of questions
        //calls back so the menu can start again.
        this.runCallBack = cb;
        console.log("form called",this);
        console.log("questions in form",this.questions);
        this.formQuestions = questions.map((question)=>{
            return {
                type : question.type ? question.type : 'input',
                message : question.title,
                name: question.name,
                choices: question.choices ? question.choices : '[]'
            }
        })
    }
    async run () {
        const data = await inquirer.prompt(this.formQuestions);
        console.log(data)
        this.runCallBack(data);
    }
}





const mainMenu = async (cb) => {
    
    
}   

module.exports = form;