'use strict';

const input = require('fs').readFileSync(0, 'utf8').trim();

let value = input;

if (value === 'ECMAScript') {
  console.log('Right!');
} else {
  console.log("You don't know? ECMAScript!");
}