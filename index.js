#!/usr/bin/env node

const shell = require('shelljs');

const printGreeting = require('./greeting');
const askQuestions = require('./question');

const run = async () => {
  printGreeting();
  const { FILENAME, EXTENSION } = askQuestions();
};

run();
