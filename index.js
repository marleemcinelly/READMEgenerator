// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter your project title',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Describe your project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'How is your project installed?',
            name: 'install'
        },
        {
            type: 'input',
            message: 'What is the usage policy for your project?',
            name: 'use'
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines for your project?',
            name: 'contribute'
        },
        {
            type: 'input',
            message: 'How is your project tested?',
            name: 'test',
        },
        {
            type: 'list',
            message: 'What license type does your software use?',
            name: 'license',
            choices: ['Public domain','Permissive','LGPL','Copyleft','Proprietary'],
        },
        {
            type: 'input',
            message: 'Enter your GitHub username',
            name: 'userGitHub',
        },
        {
            type: 'input',
            message: 'Enter your email address',
            name: 'userEmail',
        },
        {
            type: 'input',
            message: 'Please enter any additional contact instructions (If none, hit enter)',
            name: 'qOrC',
        }
    ])
.then((response)=>{
    // console.log(response.title, response.description, response.install, response.use, response.contribute, response.test, response.license, response.userGitHub, response.userEmail, response.qOrC);
    const data = ` # ${response.title}\n\n # Description\n\n ${response.description}\n\n # Table of Contents\n\n * [Installation](#-installation)\n * [Useage](#-usage)\n * [License](#-license)\n * [Contributing](#-contributing)\n * [Tests](#-tests)\n * [Questions](#-questions)\n\n # Installation\n\n ${response.install}\n\n # Usage\n\n ${response.use}\n\n # License\n\n ${response.license}\n\n # Contributing\n\n ${response.contribute}\n\n # Tests\n\n ${response.test}\n\n # Questions?\n\n You can find me on GitHub through my username: ${response.userGitHub}\n\n You can also email me directly at: ${response.userEmail} \n\n${response.qOrC}`;
    fs.writeFile(`${response.title}.md`, data, (err) => err ? console.log(err) : console.log('File generated successfully! Check your folder!'));
});

// const questions = [

//     Title: `What is the title of your project?`, //stored in variable 'fileName', then has + ".md" to create the file name?
//     Description: `What does your project do?`,
//     Installation: `How is your project installed?`,
//     Usage: `How can people use your project?` (list format),
//     Contributing:`What are the contribution guidelines for this project?`,
//     Tests: `How is your project tested?`,
//     License: `What license doe syour project use?` (list format),
//     GitHub username: `What is your GitHub username?`,
//     Email address: `What is your email address?`,
//     Question instructions: `Are there any additional insructions needed to contact you?`

// ];

// const data = {
//     badge: "*****",
//     title: "README",
//     toc: [//figure out how to put links in a README, I assume this is an array of them],
//     description: "A README generator that runs from the command line",
//     install: "This project can be donwloaded from github and run in any coding program. It has a dependency in inquirer.",
//     use: "The project is free to use, with appropriate credit and links to the original github repository",
//     contribute: "Anyone is allowed to contribute. Please add a list of your contributions to the README, along with contact information",
//     test: "run it and see if it breaks",
//     license: "*****",
//     userGitHub: "marleemcinelly",
//     userEmail: "marleemcinelly@gmail.com",
//     qOrC: "*****"
// }

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
