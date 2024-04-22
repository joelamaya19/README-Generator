// Includes packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown.js");

// Creates an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your project description?",
        name: "description"
    },
    {
        type: "input",
        message: "What are your project installation instructions?",
        name: "installation"
    },
    {
        type: "input",
        message: "What are your project usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are your project contribution guidelines?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are your project test instructions?",
        name: "test"
    },
    {
        type: "list",
        message: "Choose a license for your project:",
        choices: ["MIT", "Apache 2.0", "GPLv3", "BSD 3-Clause", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err? console.log(err) : console.log("Success! README.md file created!")
    );
}

// A function to initialize app
function init() {
    inquirer
       .prompt(questions)
       .then((data) => {
            const readmeContent = generateMarkdown(data);
            console.log(data);
            writeToFile("./readme_samples/README.md", readmeContent);
        })
       .catch((err) => {
            console.log(err);
        });
}

// Function call to initialize app
init();
