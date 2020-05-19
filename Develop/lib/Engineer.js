// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;

// const engineerQues = [
//     {
//         type: "input",
//         message: "What is your engineer's name?",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "What is your engineer's id?",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "What is your engineer's email?",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "What is your engineer's Github username?",
//         name: "github"
//     }
// ];
// module.exports = {Engineer, engineerQues};