// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;

// const managerQues = [
//     {
//         type: "input",
//         message: "What is your manager's name?",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "What is your manager's id?",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "What is your manager's email?",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "What is your manager's office number?",
//         name: "officeNumber"
//     }
// ];
// module.exports = {Manager, managerQues};