const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
console.log("Please build your team.");

const nextEmployee = [
    {
        type: "list",
        message: "Which team member would you like to add? (Use arrow keys)",
        name: "role",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."]
    }
];
const engineerQues = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your engineer's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your engineer's Github username?",
        name: "github"
    }
];
const internQues = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your intern's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "school"
    }
];
const managerQues = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your manager's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber"
    }
];

async function init() {
    try {
        let currentObj = await inquirer.prompt(managerQues);
        const newManager = new Manager({...currentObj});
        // const newManager = new Manager(currentObj.officeNumber, currentObj.name, currentObj.id, currentObj.email);
        const managerObj = {name:newManager.getName(), id:newManager.getId(), email:newManager.getEmail(), role: newManager.getRole(), officeNumber:newManager.getOfficeNumber()};
        const employeesArr = [{...managerObj}];
        console.log(employeesArr);
        let next = await inquirer.prompt(nextEmployee);
        while(next.role !== "I don't want to add any more team members.") {
            switch (next.role) {
                case "Engineer":
                    currentObj = await inquirer.prompt(engineerQues);
                    let newEngineer = new Engineer({...currentObj});
                    let engineerObj = {name:newEngineer.getName(), id:newEngineer.getId(), email:newEngineer.getEmail(), role: newEngineer.getRole(), github:newEngineer.getGithub()};
                    employeesArr.push({...engineerObj});
                    break;
                case "Intern":
                    currentObj = await inquirer.prompt(internQues);
                    let newIntern = new Intern({...currentObj});
                    let internObj = {name:newIntern.getName(), id:newIntern.getId(), email:newIntern.getEmail(), role: newIntern.getRole(), school:newIntern.getSchool()};
                    employeesArr.push({...internObj});
                    break;
            }
            next = await inquirer.prompt(nextEmployee);
        }
    } catch(err) {
        console.log(err);
    }
}

init();
// const html = render(employeesArr);

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
