// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template.js')

const userInput = [];
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions for installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for usage.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the license for your software from the list:',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT', 'Boost Software', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide information on testing.'
}];

// TODO: Create a function to write README file
function writeToFile(userInput) {
    fs.writeFile('./dist/readme.md', generateReadme(userInput[0]), err => {
        if(err) throw err;

        console.log('readme generated');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        userInput.push(answers);
        //console.log(userInput);
        if (userInput) {
            writeToFile(userInput);
        } else {
            console.log('Condition was not met');
        }
    })
}

// Function call to initialize app
init();