// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter project title:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter project description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter usage information:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter contribution guidelines:',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Enter test instructions:',
      name: 'test',
    },
  ])
  .then(() =>
      console.log('Success!')
  );


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );


// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();






