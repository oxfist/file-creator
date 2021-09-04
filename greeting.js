const chalk = require('chalk');
const figlet = require('figlet');

const greetingMessage = () => {
  const message = chalk.green(
    figlet.textSync('Hello, world!'),
  );

  console.log(message);
};

module.exports = greetingMessage;
