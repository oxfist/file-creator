#!/usr/bin/env node

const greetingMessage = require('./greeting');
const askQuestions = require('./question');
const createFile = require('./creator');
const successMessage = require('./success');

const run = async () => {
  console.log(greetingMessage());
  const { FILENAME, EXTENSION } = await askQuestions();

  const filePath = createFile(FILENAME, EXTENSION);

  console.log(successMessage(filePath));
};

run();
