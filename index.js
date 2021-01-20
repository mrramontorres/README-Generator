//Packages and modules needed
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter your project title:',
    name: 'title',
    validate: function (response) {
        if (response ===  '') {
          return console.log("Please enter a title.");
        }
        return true;
      }
  },
  {
    type: 'input',
    message: 'Enter project description:',
    name: 'description',
    validate: function (response) {
        if (response === '') {
          return console.log("Please enter a description.");
        }
        return true;
      }
  },
  {
    type: 'input',
    message: 'Enter installation instructions otherwise leave blank.',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter any usage instructions otherwise leave blank.',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Enter any contribution guidelines otherwise leave blank.',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Enter any tests otherwise leave blank.',
    name: 'test',
  },
  {
    type: 'list',
    message: 'Please chose a license from the following options:',
    name: 'license',
    choices: ['Apache 2.0 License','Boost Software License 1.0', 'BSD 3-Clause License', 
    'BSD 2-Clause License', 'CC0','Attribution 4.0 International','GNU GPL v3','GNU AGPL v3',
    'IBM Public License Version 1.0','ISC License (ISC)','The MIT License',
    'Mozilla Public License 2.0','Attribution License (BY)', 'Open Database License (ODbL)',
    'Public Domain Dedication and License (PDDL)', 'The Perl License', 'SIL Open Font License 1.1']
  },
  {
    type: 'input',
    message: 'Enter your GitHub username:',
    name: 'username',
    validate: function (response) {
        if (response ===  '') {
          return console.log("Please enter a valid GitHub username.");
        }
        return true;
      }
  },
  {
    type: 'input',
    message: 'Enter your contact email.',
    name: 'email',
    default: 'email@domain.com',
    validate: function (response) {
        if (response ===  '') {
          return console.log("Please enter a valid email.");
        }
        return true;
      }
  },

];

//Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) { 
      if (err) {
        return console.error(err);
      }
      console.log('Successfully wrote README file!');
    }
  )
};

const writeFileAsync = util.promisify(writeToFile);

//Function to initialize app
async function init() {
  try{

    //Prompt Inqurier method
    const userInputs = await inquirer.prompt(questions);
    console.log("Responces received.");

    //Pass data to generateMarkdown
    const markdown = generateMarkdown(userInputs);

    //Write file
    await writeFileAsync('sampleREADME.md', markdown);

  } catch (error) {
    console.log(error);
  }
};

// Function call to initialize app
init();