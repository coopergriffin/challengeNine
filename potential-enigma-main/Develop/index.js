//Cooper Griffin 

// NPM Package Declaration 
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description:',
  },
  // Add more questions for other sections (installation, usage, etc.)
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log(`${fileName} generated successfully!`);
}

// Create a function to initialize app
function init() {
  // Prompt the user for information
  inquirer.prompt(questions).then((answers) => {
    // Generate README content based on user input
    const readmeContent = `# ${answers.title}

## Description
${answers.description}

<!-- Add more sections and content based on user input -->

`;

    // Write the README file
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();


console.log("Hello");