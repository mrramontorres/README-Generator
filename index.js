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
    default: 'Project Title',
    validate: function (response) {
        if (response.length < 1) {
          return console.log("Enter a title for your project.");
        }
        return true;
      }
  },
  {
    type: 'input',
    message: 'Enter project description:',
    name: 'description',
    default: 'Project Description',
    validate: function (response) {
        if (response.length < 1) {
          return console.log("Enter a description for your project.");
        }
        return true;
      }
  }
];


/*
inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter project title:',
        name: 'title',
        default: 'no title'
        validate: function (response) {
            var done = this.async();

            if(response.length < 1) {
                return console.log("Enter a title");
            }
            return true;
        }
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
  .then((data) => {
    const filename = `${'README'}.md`;
    console.log(filename);
  });
*/

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', data, (err) => { 
      err ? console.error(err) : console.log('Successfully wrote README file!')
    }
  )
};


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();






