// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const projectDataArgs = process.argv.slice(2, process.argv.length);
const [title, github] = projectDataArgs;

//test function
const generatePage = (title, github) => {
  return `
  # ${title}
  
  ### My Github: [${github}](https://github.com/)https://github.com/${github})
  `;
};

console.log(title, github);
console.log(generatePage(title, github));

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {
//   console.log("this is working");
// }

// // Function call to initialize app
// init();
