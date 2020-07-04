const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const generate = require("./utils/generateMarkdown");
const writeFilePromisify = util.promisify(fs.writeFile)

// array of questions for user
const questions = [
    // {
    //   type: "checkbox",
    //   message: "What sections of the readme will you be populating",
    //   choices: ['Title', 'Option 2', 'Option 3', 'Option 4'],
    //   name: "choices"
    // },
  
    {
      type: "input",
      message: "What is your project title?",
      name: "title"
    },
    {
      type: "input",
      message: "Enter a description for your project",
      name: "description"
    },
    {
      type: "input",
      message: "Enter installation instructions",
      name: "installation"
    },
    {
      type: "input",
      message: "Enter usage information",
      name: "usage"
    },
    {
      type: "input",
      message: "Enter contribution guidelines",
      name: "contribution"
    },
    {
      type: "input",
      message: "Enter test instructions",
      name: "test"
    },
    {
      type: "list",
      message: "Choose a license for this project?",
      name: "license",
      choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License (MPL) 1.1', 'Open Data Commons']
    },
    {
      type: "input",
      message: "Enter Github username",
      name: "github"
    },
    {
      type: "input",
      message: "Enter your email address",
      name: "email"
    }
];




// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

  inquirer.prompt(questions)
    .then(answers => {
      console.log(answers)
    writeFilePromisify("readMe.md", generate.generateMarkdown(answers));
  
})
.catch(console.error)

}

// function call to initialize program
init();
