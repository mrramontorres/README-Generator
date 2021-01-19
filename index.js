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
  },
/*  {
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
*/  {
    type: 'input',
    message: 'Enter test instructions:',
    name: 'test',
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
    console.log(markdown);

    //Write file
    await writeFileAsync('README.md', markdown);

  } catch (error) {
    console.log(error);
  }
};

// Function call to initialize app
init();