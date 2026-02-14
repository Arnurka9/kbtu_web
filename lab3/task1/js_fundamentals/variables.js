let text = "Hello";
console.log(text);

// We can also declare multiple variables in one line:
let user = 'John', age = 25, message = 'Hello';

/*
option 2
let user = 'John';
let age = 25;
let message = 'Hello';

option 3
let user = 'John',
  age = 25,
  message = 'Hello';
*/


//we have option to declare by key word "var", but have don't listen scopes... so please don't do that 
//!we can't declare the same variable in second time
//we can use $ and _ as names of variables.

let $ = 4;
let _ = 5;

// Non-Latin letters are allowed, but not recommended

let бірдеңе = 4;

//in use strict mode we can't create global variables
something = 10; //in js structure this variable in window object.

'use strict';
//something2 = 40; //error

//! const
// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:

//for variables which we alright knows and they won't change 
const PI = 3.14;
const COLOR_RED = "#F00";