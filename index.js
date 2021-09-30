// Required Packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Inquirer prompts
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is the GitHub repo name?",
    name: "repo",
  },
  {
    type: "input",
    message: "What is the project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a project description.",
    name: "description",
  },
  {
    type: "input",
    message: "Describe the steps required to install your project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples of your project.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Provide guidelines on how other developers can contribute to your project.",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "Provide any tests written for your application and provide examples on how to run them.",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    choices: [
      "No License",
      "GNU GPLv3",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
    ],
    name: "license",
  },
];
//write to file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success! Your README.md file has been generated");
  });
}
const writeFileAsync = util.promisify(writeToFile);
// Returning writeFileAsync promise
async function init() {
    try {

        // Prompt Inquirer questions
        const userInputs = await inquirer.prompt(questions);
        console.log("Your responses: ", userInputs);
    
        // Pass Inquirer userInputs and GitHub userInfo to generateMarkdown
        console.log("README file generating...")
        const generateReadMe = generateMarkdown(userInputs);

        await writeFileAsync(`robotREADME.md`, generateReadMe);

    } catch (error) {
        console.log(error);
    }
};

init();

