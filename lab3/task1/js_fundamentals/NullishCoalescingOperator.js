// The nullish coalescing operator is written as two question marks ??.

// We can rewrite result = a ?? b using the operators that we already know, like this:
result = (a !== null && a !== undefined) ? a : b;

//
let user;
console.log(user ?? "Anonymous");
uset = "John";
console.log(user ?? "Anonymous");


//ex2
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


//comparison
//!         || returns the first truthy value.
//!         ?? returns the first defined value.

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0


//precedence == приоритет 
let height = null;
let width = null;

// important: use parentheses    * has the higher precedence than ??
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000


//using ?? with && or ||
// let x = 1 && 2 ?? 3; //! Syntax error

let x = (1 && 2) ?? 3; // Works
alert(x); // 2