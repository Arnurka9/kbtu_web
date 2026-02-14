// By specification, only two primitive types may serve as object property keys:

// string type, or
// symbol type.
// Otherwise, if one uses another type, such as number, it’s autoconverted to string. So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].

// Until now we’ve been using only strings.

// Now let’s explore symbols, see what they can do for us.

//!Symbol
// Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values. The description is just a label that doesn’t affect anything.

// For instance, here are two symbols with the same description – they are not equal:

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

//Symbols don’t auto-convert to a string
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

// If we really want to show a symbol, we need to explicitly call .toString() on it, like here:

let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works
// Or get symbol.description property to show the description only:

let id = Symbol("id");
alert(id.description); // id


//Hidden  properties

let user = { // belongs to another code
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // we can access the data using the symbol as the key


// Symbols in an object literal
// If we want to use a symbol in an object literal {...}, we need square brackets around it.

// Like this:

let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};
// That’s because we need the value from the variable id as the key, not the string “id”.


// Symbols are skipped by for…in
// Symbolic properties do not participate in for..in loop.

// For instance:

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123
// Object.keys(user) also ignores them. That’s a part of the general “hiding symbolic properties” principle. If another script or a library loops over our object, it won’t unexpectedly access a symbolic property.

// In contrast, Object.assign copies both string and symbol properties:

let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123
// There’s no paradox here. That’s by design. The idea is that when we clone an object or merge objects, we usually want all properties to be copied (including symbols like id).



//Global symbols 

// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true


//Symbol.keyFor

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id


// The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol. So it doesn’t work for non-global symbols. If the symbol is not global, it won’t be able to find it and returns undefined.

// That said, all symbols have the description property.

// For instance:

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name




// System symbols
// There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.

// They are listed in the specification in the Well-known symbols table:

Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
// …and so on.
// For instance, Symbol.toPrimitive allows us to describe object to primitive conversion. We’ll see its use very soon.

// Other symbols will also become familiar when we study the corresponding language features.