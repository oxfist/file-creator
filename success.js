const chalk = require('chalk');

const successMessage = (filePath) => chalk.black.bgGreen.bold(`Done! File created at ${filePath}}`);

module.exports = successMessage;
