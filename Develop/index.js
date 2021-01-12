// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template.js')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('readme.md', generateReadme(data), err => {
        if(err) throw err;

        console.log('readme generated');
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
