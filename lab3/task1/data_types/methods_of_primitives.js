// A primitive

// Is a value of a primitive type.
// There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.
// An object

// Is capable of storing multiple values as properties.
// Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.
// One of the best things about objects is that we can store a function as one of its properties.

let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!


// Here’s how it works:

let str = "Hello";

alert( str.toUpperCase() ); // HELLO
// Simple, right? Here’s what actually happens in str.toUpperCase():

// The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
// That method runs and returns a new string (shown by alert).
// The special object is destroyed, leaving the primitive str alone.


// Constructors String/Number/Boolean are for internal use only

alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!


let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}


// On the other hand, using the same functions String/Number/Boolean without new is totally fine and useful thing. They convert a value to the corresponding type: to a string, a number, or a boolean (primitive).

// For example, this is entirely valid:

let num = Number("123"); // convert a string to number

