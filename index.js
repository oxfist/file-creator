#!/usr/bin/env node

const shell = require('shelljs');

const greetingMessage = require('./greeting');
const askQuestions = require('./question');

const run = async () => {
  greetingMessage();
  const { FILENAME, EXTENSION } = askQuestions();
};

run();
