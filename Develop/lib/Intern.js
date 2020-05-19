// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(obj) {
        this.school = obj.school;
        super("Intern", obj.name, obj.id, obj.email);
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;

// const internQues = [
//     {
//         type: "input",
//         message: "What is your intern's name?",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "What is your intern's id?",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "What is your intern's email?",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "What is your intern's school?",
//         name: "school"
//     }
// ];
// module.exports = {Intern, internQues};