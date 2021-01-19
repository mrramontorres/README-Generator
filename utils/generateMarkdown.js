// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//Function that generates markdown for README
function generateMarkdown(userInputs) {

  //Markdown
  let markdownSample = `# ${userInputs.title}
  Badge posted here TBD.

  ## Description 
  ${userInputs.description}`

  //Table of Contents provided by user
  let toc = `## Table of Contents`;

  if(userInputs.installation !=='') { 
    toc += `*[Installation](#installation)`
  };
  if(userInputs.usage !=='') { 
    toc += `*[Usage](#usage)`
  };
  if(userInputs.contribution !=='') { 
    toc += `*[Contribution](#contribution)`
  };
  if(userInputs.test !=='') { 
    toc += `*[Tests](#test)`
  };
  
  `## Installation 
  ${userInputs.installation}

  ## Usage 
  ${userInputs.usage}

  ## License
  ${userInputs.license}

  ## Contributing
  ${userInputs.contribution}

  ## Tests
  ${userInputs.test}

  ## Questions
  GitHub: @${userInputs.username}
  Email: ${userInputs.email}
  `
  return markdownSample;
}

module.exports = generateMarkdown;
