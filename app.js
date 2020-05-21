const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
fs.writeFile = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Array of questions for each employee
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
        //Prompt Manager Info and push object to array
        const newManager = new Manager(currentObj.name, currentObj.id, currentObj.email, currentObj.officeNumber);
        const employeesArr = [newManager];
        //Prompt what employee to add next
        let next = await inquirer.prompt(nextEmployee);
        while(next.role !== "I don't want to add any more team members.") {
            switch (next.role) {
                //Prompt Engineer Info and push object to array
                case "Engineer":
                    currentObj = await inquirer.prompt(engineerQues);
                    let newEngineer = new Engineer(currentObj.name, currentObj.id, currentObj.email, currentObj.github);
                    employeesArr.push(newEngineer);
                    break;
                //Prompt Intern Info and push object to array
                case "Intern":
                    currentObj = await inquirer.prompt(internQues);
                    let newIntern = new Intern(currentObj.name, currentObj.id, currentObj.email, currentObj.school);
                    employeesArr.push(newIntern);
                    break;
            }
            //While user still wants to add employees, prompt what employee to add next
            next = await inquirer.prompt(nextEmployee);
        }
        //Render html data and write to team.html file in output folder
        const html = await render(employeesArr);
        await fs.writeFile(outputPath, html);
        console.log('Success!');
    } catch(err) {
        console.log(err);
    }
}

console.log("Please build your team.");
init();