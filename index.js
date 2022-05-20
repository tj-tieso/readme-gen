const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub Username?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub Username");
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the title of the project");
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of the project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide a description of the project!");
        }
      },
    },
    {
      type: "input",
      name: "install",
      message: "Please provide installation instructions for the project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please provide installation instructions for the project!"
          );
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Please describe the intended usage for the project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please describe the intended usage for the project!");
        }
      },
    },
    {
      type: "checkbox",
      name: "license",
      message: "Which license applies to the project?",
      choices: ["MIT", "Apache 2.0", "Boost"],
    },
    {
      type: "input",
      name: "contribute",
      message: "Please add any contributing sources.",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide your email address.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide your email address!");
        }
      },
    },
  ]);
};

// // TODO: Create a function to write README file
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File Created!",
      });

      console.log(
        "File Created. Check the dist folder for your new README.md!"
      );
    });
  });
};

// // TODO: Create a function to initialize app
promptUser()
  .then((data) => {
    return generateMarkdown(data);
  })
  .then((pageMd) => {
    return writeFile(pageMd);
  })
  .catch((err) => {
    console.log(err);
  });

// // Function call to initialize app
