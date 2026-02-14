//1
let x = 1;

x = -x;
console.log( x );


//2
/* 

Maths
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.

*/

//3 + like concatenation

let s = "my" + "string";
console.log(s); // mystring


//4 here war between string concatenation and plus from math
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"

console.log(2 + 2 + '1' ); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14"


//5   - /   don's exist in string operations, so string automatically changes to int 
console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers

//6  numeric conversion, unary+ 
let x2 = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0



let apples = "2";
let oranges = "3";
// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5


// operator precedence ()
console.log(1 + 2 * 2)
console.log((1 + 2) * 2)


//assignment = returns a value
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0


//chaining assignments 
let a, b, c;

a = b = c = 2 + 2;

console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4


//modify-in-place 
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

console.log( n ); // 14


// Increasing or decreasing 
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
counter--;
console.log( counter ); // 3


//bitwise operators 
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

//comma
// three operations in one line
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//  ...
// }

