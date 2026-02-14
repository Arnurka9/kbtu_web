function sayHi() {
  alert( "Hello" );
}

let sayHi = function() {
  alert( "Hello" );
}



// In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation,
// which is the source code.
// Surely, a function is a special value, in the sense that we can call it like sayHi().
// But it’s still a value. So we can work with it like with other kinds of values.
// We can copy a function to another variable:

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)




// callBack functions 
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);


// arguments of function as function
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);



// Function Declaration
function sum(a, b) {
  return a + b;
}
// Function Expression
let sum = function(a, b) {
  return a + b;
};



// difference of function declaration and function expression
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}



sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};