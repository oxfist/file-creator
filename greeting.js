const chalk = require('chalk');
const figlet = require('figlet');

const greetingMessage = () => {
  console.log(chalk.green('Hello, world'));
}

module.exports = greetingMessage;
