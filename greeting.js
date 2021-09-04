const chalk = require('chalk');
const figlet = require('figlet');

const printGreeting = () => {
  const message = chalk.green(
    figlet.textSync('File Creator', {
      horizontalLayout: 'default',
      verticalLayout: 'default',
    }),
  );

  console.log(message);
};

module.exports = printGreeting;
