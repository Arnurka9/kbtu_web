//basic
console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)


//so far, so good
let result = 5 > 4; // assign the result of the comparison
console.log( result ); // true

//string comparisons
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

//char by char (ASCII)

//different types comparisons
console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1

console.log( true == 1 ); // true
console.log( false == 0 ); // true

//strict equality

console.log(false === 0); //false, because they have different types


//comparison with null and undefined 

console.log( null === undefined ); // false
console.log( null == undefined ); // true

//strange result: null vs 0 
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false    null == undefined  "true",       null == something except undefined  "false"
console.log( null >= 0 ); // (3) true

// an incomparable undefined     Number.isNaN(Number(undefined))  true
