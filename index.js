#!/usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');

const greetingMessage = require('./greeting.js');


const run = async () => {
  greetingMessage();
};

run();
