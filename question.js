const inquirer = require('inquirer');

const askQuestions = () => {
  const questions = [
    {
      name: 'FILENAME',
      type: 'input',
      message: 'What is the name of the file without extension?',
    },
    {
      name: 'EXTENSION',
      type: 'list',
      message: 'What is the file extension?',
      choices: ['.js', '.jsx', '.md', '.json'],
      filter(val) {
        return val.split('.')[1];
      },
    },
  ];

  return inquirer.prompt(questions);
};

module.exports = askQuestions;
