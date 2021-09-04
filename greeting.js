const chalk = require('chalk');
const figlet = require('figlet');

const greetingMessage = () => chalk.green(
  figlet.textSync('File Creator', {
    horizontalLayout: 'default',
    verticalLayout: 'default',
  }),
);

module.exports = greetingMessage;
