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
            message: 'What license type does your software use? See https://choosealicense.com/ for help on choosing the right one for you!',
            name: 'license',
            choices: [
                 apache = {
                    name: 'Apache 2.0',
                    value: 'here is the legal jargon',
                    short: 'You chose the Apache 2.0 License for your project! See the License section of your generated README for legal details.'
                },
                boost = {
                    name: 'Boost 1.0',
                    value: 'here is the legal jargon',
                    short: 'You chose the Boost Software License 1.0 for your project! See the License section of your generated README for legal details.'
                },
                bsd3 = {
                    name: 'BSD 3-Clause',
                    value: 'here is the legal jargon',
                    short: 'You chose the BSD 3-Clause License for your project! See the License section of your generated README for legal details.'
                },
                bsd2 = {
                    name: 'BSD 2-Clause',
                    value: 'here is the legal jargon',
                    short: 'You chose the BSD 2-Clause License for your project! See the License section of your generated README for legal details.'
                },
                cc1 = {
                    name: 'CC0-1.0',
                    value: 'here is the legal jargon',
                    short: 'You chose the Creative Commons Zero v1.0 Universal License for your project! See the License section of your generated README for legal details.'
                },
                ccbysa4 = {
                    name: 'CC BY-SA 4.0',
                    value: 'here is the legal jargon',
                    short: 'You chose the Creative Commons Attribution-ShareAlike 4.0 International for your project! See the License section of your generated README for legal details.'
                },
                epl1 = {
                    name: 'EPL 1.0',
                    value: 'here is the legal jargon',
                    short: 'You chose the Eclipse Public License 1.0 License for your project! See the License section of your generated README for legal details.'
                },
                gplv3 = {
                    name: 'GPL v3',
                    value: 'here is the legal jargon',
                    short: 'You chose the GNU GPL v3 for your project! See the License section of your generated README for legal details.'
                },
                agplv3 = {
                    name: 'AGPL v3',
                    value: 'here is the legal jargon',
                    short: 'You chose the GNU AGPL v3 for your project! See the License section of your generated README for legal details.'
                },
                gplv2 = {
                    name: 'GPL v2',
                    value: 'here is the legal jargon',
                    short: 'You chose the GNU GPL v2 for your project! See the License section of your generated README for legal details.'
                },
                lgplv3 = {
                    name: 'LGPL v3',
                    value: 'here is the legal jargon',
                    short: 'You chose the GNU LGPL v3 for your project! See the License section of your generated README for legal details.'
                },
                isc = {
                    name: 'ISC',
                    value: 'here is the legal jargon',
                    short: 'You chose the ISC License (ISC) for your project! See the License section of your generated README for legal details.'
                },
                mit = {
                    name: 'MIT',
                    value: 'here is the legal jargon',
                    short: 'You chose The MIT License for your project! See the License section of your generated README for legal details.'
                },
                mpl2 = {
                    name: 'MPL 2.0',
                    value: 'here is the legal jargon',
                    short: 'You chose the Mozilla Public License 2.0 for your project! See the License section of your generated README for legal details.'
                },// choices: [ , , , , , , ],],
                ofl11 = {
                    name: 'Open Font-1.1',
                    value: 'here is the legal jargon',
                    short: 'You chose the SIL Open Font License 1.1 for your project! See the License section of your generated README for legal details.'
                },
                unili = {
                    name: 'Unilicense',
                    value: 'here is the legal jargon',
                    short: 'You chose The Unilicense for your project! See the License section of your generated README for legal details.'
                },
                wtfpl = {
                    name: 'WTFPL',
                    value: 'here is the legal jargon',
                    short: 'You chose The Do What the Fuck You Want to Public License for your project! See the License section of your generated README for legal details.'
                },
                zlib = {
                    name: 'Zlib',
                    value: 'here is the legal jargon',
                    short: 'You chose the zlib/libpng License for your project! See the License section of your generated README for legal details.'
                }]
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
    var userLicense = 'placeholder';
    if (`${response.license}` === 'free') {
        var userLicense = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    } else {
        var userLicense = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    };
    const data = userLicense + `\n\n # ${response.title}\n\n # Description\n\n ${response.description}\n\n # Table of Contents\n\n * [Installation](#-installation)\n * [Useage](#-usage)\n * [License](#-license)\n * [Contributing](#-contributing)\n * [Tests](#-tests)\n * [Questions](#-questions)\n\n # Installation\n\n ${response.install}\n\n # Usage\n\n ${response.use}\n\n # License\n\n ${response.license}\n\n # Contributing\n\n ${response.contribute}\n\n # Tests\n\n ${response.test}\n\n # Questions?\n\n You can find me on GitHub through my username: ${response.userGitHub}\n\n You can also email me directly at: ${response.userEmail} \n\n${response.qOrC}`;
    fs.writeFile(`${response.title}.md`, data, (err) => err ? console.log(err) : console.log('File generated successfully! Check your folder!'));
});

// const questions = [

// ];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
