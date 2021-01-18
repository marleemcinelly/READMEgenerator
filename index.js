// array of questions for user
const questions = [

    Title: `What is the title of your project?`, //stored in variable 'fileName', then has + ".md" to create the file name?
    Description: `What does your project do?`,
    Installation: `How is your project installed?`,
    Usage: `How can people use your project?` (list format),
    Contributing:`What are the contribution guidelines for this project?`,
    Tests: `How is your project tested?`,
    License: `What license doe syour project use?` (list format),
    GitHub username: `What is your GitHub username?`,
    Email address: `What is your email address?`,
    Question instructions: `Are there any additional insructions needed to contact you?`

];

const data = {
    badge: "*****",
    title: "README",
    toc: [//figure out how to put links in a README, I assume this is an array of them],
    description: "A README generator that runs from the command line",
    install: "This project can be donwloaded from github and run in any coding program. It has a dependency in inquirer.",
    use: "The project is free to use, with appropriate credit and links to the original github repository",
    contribute: "Anyone is allowed to contribute. Please add a list of your contributions to the README, along with contact information",
    test: "run it and see if it breaks",
    userGitHub: "marleemcinelly",
    userEmail: "marleemcinelly@gmail.com",
    qOrC: "*****"
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
