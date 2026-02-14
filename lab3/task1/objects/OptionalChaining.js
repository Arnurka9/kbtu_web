// Optional chaining '?.'

//The "non-existing property" problem

// Optional chaining
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

// In other words, value?.prop:

// works as value.prop, if value exists,
// otherwise (when value is undefined/null) it returns undefined.
// Here’s the safe way to access user.address.street using ?.:

let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)


//2
let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element

//3
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined



//Short-circuiting 
// As it was said before, the ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.

// So, if there are any further function calls or operations to the right of ?., they won’t be made.

// For instance:

let user = null;
let x = 0;

user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented


//Other variants: ?.(), ?.[]
// The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.
// For example, ?.() is used to call a function that may not exist.
// In the code below, some of our users have admin method, and some don’t:

let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)

//

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

//
delete user?.name; // delete user.name if user exists



// We can use ?. for safe reading and deleting, but not writing
// The optional chaining ?. has no use on the left side of an assignment.

// For example:

let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"