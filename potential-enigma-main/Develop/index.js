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
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log(`${fileName} generated successfully!`);
}

function generateLicenseBadge(license) {
    if (license === 'None') {
      return '';
    }
    return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-brightgreen)`;
  }
  

// Create a function to initialize app
function init() {
    // Prompt the user for information
    inquirer.prompt(questions).then((answers) => {
        const licenseBadge = generateLicenseBadge(answers.license);
        // Generate README content based on user input
        const readmeContent = `# ${answers.title}

## License
${licenseBadge}
This application is covered under the ${answers.license} license.

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}




## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, you can reach me on GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
or contact me via email: ${answers.email}
`;

        // Write the README file
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();