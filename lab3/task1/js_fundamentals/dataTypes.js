//dynamically typed

let message = 'hello';
message = 1343; //no error


// number 
let n = 124;
n = 12.455;

//js has NaN - Not a Number. It's a number

n = "asdsa" / 0; // NaN
console.log(n);

console.log(1 / 0); //inf
console.log(Infinity);


//BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);


//String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`; //best

//Boolean
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

console.log(4>3);

//null
let age = null;


//undefined value
let age2;
console.log(age);
console.log(age2);

//Objects and Symbols
// The object type is special.
// All other types are called “primitive” because their values can contain only a single thing 
// (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.
// The symbol type is used to create unique identifiers for objects.

//typeof
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

