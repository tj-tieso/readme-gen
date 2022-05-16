const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title}
  
  ### Project Description
  ${data.description}

  ## Table of Contents
  -[Installation](${data.install})
  -[Usage](${data.usage})
  -[Contributors](${data.contribute})


  ### Installation Instructions
  ${data.install}


  ### Intended Usage
  ${data.usage}


  #### License
  ${data.license}


  #### Contributors
  ${data.contribute}

  ## My Github: [${data.github}](https://github.com/${data.github})
  #### Questions? Contact me at:
  ${data.email}

  `;
};

module.exports = generateMarkdown;
