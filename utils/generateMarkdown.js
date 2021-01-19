// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInputs) {
  let markdownSample =
  `
  # ${userInputs.title}

  ## Description
  ${userInputs.description}

  ## Table of Contents


  ## Installation
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
