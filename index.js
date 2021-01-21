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
                    value: `Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.`,
                    short: 'You chose the Apache 2.0 License for your project! See the License section of your generated README for legal details.'
                },
                bsd3 = {
                    name: 'BSD 3-Clause',
                    value: `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\n 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`,
                    short: 'You chose the BSD 3-Clause License for your project! See the License section of your generated README for legal details.'
                },
                gplv3 = {
                    name: 'GPL v3',
                    value: `This program is free software; you can redistribute it and/or\n modify it under the terms of the GNU General Public License\n as published by the Free Software Foundation; either version 2\n of the License, or (at your option) any later version.\n\n This program is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with this program; if not, write to the Free Software\n Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.`,
                    short: 'You chose the GNU GPL v3 for your project! See the License section of your generated README for legal details.'
                },
                mit = {
                    name: 'MIT',
                    value: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
                    short: 'You chose The MIT License for your project! See the License section of your generated README for legal details.'
                },
                none = {
                    name: 'none',
                    value: `none license left beef`,
                    short: 'You have chosen no license for your project! See the License section of your generated README for legal details.'
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
    var year = new Date().getFullYear();
    var userLicense = 'placeholder';
    // the value it's reading is the legal jargon. do not ask me why. i don't want it to but i am tired and it works so just roll with it future self
    if (`${response.license}` === 'Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.') {
        var userLicense = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    } else if (`${response.license}` === 'Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\n 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'){
        var userLicense = `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    } else if (`${response.license}` === 'This program is free software; you can redistribute it and/or\n modify it under the terms of the GNU General Public License\n as published by the Free Software Foundation; either version 2\n of the License, or (at your option) any later version.\n\n This program is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\n You should have received a copy of the GNU General Public License\n along with this program; if not, write to the Free Software\n Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.'){
        var userLicense = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    } else if (`${response.license}` === 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'){
        var userLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    } else if (`${response.license}` === 'none license left beef'){
        var userLicense = `![License: none](https://external-preview.redd.it/lApf4dLuIrnlR7xlUilsJNP8u1gjGp30NzV9Gfrr-GA.jpg?auto=webp&s=d0a902d724160e711f97f005bf7125ce22b77bdd)`;
    };
    const data = userLicense + `\n\n ## ${response.title}\n\n # Description\n\n ${response.description}\n\n # Table of Contents\n\n * [Installation](#-installation)\n * [Useage](#-usage)\n * [License](#-license)\n * [Contributing](#-contributing)\n * [Tests](#-tests)\n * [Questions](#-questions)\n\n # Installation\n\n ${response.install}\n\n # Usage\n\n ${response.use}\n\n # License\n\n Copyright ` + year + ` ${response.userGitHub}\n\n ${response.license}\n\n # Contributing\n\n ${response.contribute}\n\n # Tests\n\n ${response.test}\n\n # Questions?\n\n You can find me on GitHub at: (https://github.com/${response.userGitHub})\n\n You can also email me directly at: ${response.userEmail} \n\n${response.qOrC}`;
    fs.writeFile(`${response.title}.md`, data, (err) => err ? console.log(err) : console.log('File generated successfully! Check your folder!'));
});

// array of questions for user

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

// do you like your none pizza with left beef or right beef?