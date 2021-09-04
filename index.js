#!/usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');

const greetingMessage = require('./greeting');

const run = async () => {
  greetingMessage();
};

run();
