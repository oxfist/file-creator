#!/usr/bin/env node

const printGreeting = require('./greeting');
const askQuestions = require('./question');
const createFile = require('./creator');
const successMessage = require('./success');

const run = async () => {
  printGreeting();
  const { FILENAME, EXTENSION } = await askQuestions();

  const filePath = createFile(FILENAME, EXTENSION);

  console.log(successMessage(filePath));
};

run();
