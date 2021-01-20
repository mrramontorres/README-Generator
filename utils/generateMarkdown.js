// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(userInputs) {
  if(userInputs.license !=='') {
    licenseLink = 'LINK\n'
  } else {
    licenseLink = ''
  }
  return licenseLink 
}

//Function  returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(userInputs) {
  let license =  `## License\n${userInputs.license}`
  return license
};

//Function that generates markdown for README
function generateMarkdown(userInputs) {

  //Table of Contents provided by user
  let toc = `\n## Table of Contents\n`;

  if(userInputs.installation !=='') { toc += 
    `* [Installation](#installation)\n`};
  if(userInputs.usage !=='') { toc += 
    `* [Usage](#usage)\n`};
  if(userInputs.contribution !=='') { toc += 
    `* [Contribution](#contribution)\n`};
  if(userInputs.test !=='') { toc += 
    `* [Tests](#test)\n`};

  //console.log(toc);

//Markdown
let markdownSample =

`

# ${userInputs.title}
License Badge to go here.

`
 markdownSample += renderLicenseLink(userInputs);
`

## Description 
${userInputs.description}\n

`

  markdownSample += toc;

  if(userInputs.installation !=='') {
    markdownSample +=

`
## Installation 
${userInputs.installation}

`
  };

  if(userInputs.usage !=='') {
    markdownSample +=
`
## Usage 
${userInputs.usage}

`
  };

  if(userInputs.contribution !=='') {
    markdownSample +=

`
## Contributing
${userInputs.contribution}

`
  };

  if(userInputs.test !==``) {
    markdownSample +=

`
## Tests
${userInputs.test}

`
  };

  markdownSample += 
`
## Questions?
*To reach me with additional questions feel free to contact me.*\n
GitHub: https://github.com/${userInputs.username}\n
Email: ${userInputs.email}

`

markdownSample += renderLicenseSection(userInputs);

  return markdownSample;

}

module.exports = generateMarkdown;
