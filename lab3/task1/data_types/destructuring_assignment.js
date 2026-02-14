// Destructuring assignment allows for instantly mapping an object or array onto many variables.

// The full object syntax:

// let {prop : varName = defaultValue, ...rest} = object
// This means that property prop should go into the variable varName and, if no such property exists, then the default value should be used.

// Object properties that have no mapping are copied to the rest object.

// The full array syntax:

// let [item1 = defaultValue, item2, ...rest] = array
// The first item goes to item1; the second goes into item2, and all the rest makes the array rest.

// It’s possible to extract data from nested arrays/objects, for that the left side must have the same structure as the right one.

