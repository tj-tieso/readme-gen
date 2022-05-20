const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title}
  
  ## Project Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contribute}
  
  ## License
  ${data.license}

  ## Questions
  #### Contact me at:
  Email: ${data.email}

  Github: [${data.github}](https://github.com/${data.github})

  `;
};

module.exports = generateMarkdown;
