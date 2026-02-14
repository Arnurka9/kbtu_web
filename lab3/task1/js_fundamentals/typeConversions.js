//1
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string


//2
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

//3
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed

//4
// Numeric conversion rules:

// Value	Becomes…
// undefined	NaN
// null	0
// true and false	1 and 0
// string	Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. 
//      If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.


//5
//Boolean convertion rules
console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false

