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

  //Table of Contents provided by user
  let toc = `## Table of Contents`;

  if(userInputs.installation !=='') { toc += `
    * [Installation](#installation)`
  };
  if(userInputs.usage !=='') { 
    toc += `* [Usage](#usage)`
  };
  if(userInputs.contribution !=='') { 
    toc += `* [Contribution](#contribution)`
  };
  if(userInputs.test !=='') { 
    toc += `* [Tests](#test)`
  };

  //console.log(toc);

  //Markdown
  let markdownSample = 
  `# ${userInputs.title}
  
  Badge posted here TBD.
  
  ## Description 
  ${userInputs.description}\n
  `
  markdownSample += toc;

  if(userInputs.installation !=='') {
  markdownSample +=
  `
  ## Installation 
  ${userInputs.installation}\n
  `
  };
  
  if(userInputs.usage !=='') {
  markdownSample +=
  `
  ## Usage 
  ${userInputs.usage}\n
  `
  };
  
  if(userInputs.contribution !=='') {
    markdownSample +=
  `
  ## Contributing
  ${userInputs.contribution}\n
  `
  };

  if(userInputs.test !==``) {
    markdownSample +=
  `
  ## Tests
  ${userInputs.test}\n
  `
  };

  `
  ## Questions
  GitHub: @${userInputs.username}
  Email: ${userInputs.email}


  ## License
  ${userInputs.license}\n
  `

  return markdownSample;
}

module.exports = generateMarkdown;
