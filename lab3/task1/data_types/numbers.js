// Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”.
// BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed (253-1) or be less than -(253-1)


let billion = 1000000000;
// We also can use underscore _ as the separator:

let billion = 1_000_000_000;


let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

let mсs = 0.000001;
// Just like before, using "e" can help. If we’d like to avoid writing the zeroes explicitly, we could write the same as:

let mcs = 1e-6; // five zeroes to the left from 1


// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times


//Hex, binary and octal numbers 
//hex
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

// Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides



let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111


//rounding


	    Math.floor	Math.ceil	Math.round	Math.trunc
3.1	        3	        4	        3	        3
3.5	        3	        4	        4	        3
3.6	        3	        4	        4	        3
-1.1    	-2	        -1      	-1      	-1
-1.5    	-2	        -1      	-1      	-1
-1.6    	-2	        -1      	-2      	-1

// But what if we’d like to round the number to n-th digit after the decimal?
// For instance, we have 1.2345 and want to round it to 2 digits, getting only 1.23.
// There are two ways to do so:
//1
// Multiply-and-divide.
// For example, to round the number to the 2nd digit after the decimal, we can multiply the number by 100, call the rounding function and then divide it back.

let num = 1.23456;

alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23


//2

let num = 12.34;
alert( num.toFixed(1) ); // "12.3"


//Imprecise calculations 

alert( 1e500 ); // Infinity
alert( 0.1 + 0.2 == 0.3 ); // false
alert( 0.1 + 0.2 ); // 0.30000000000000004

// What is 0.1? It is one divided by ten 1/10, one-tenth. In the decimal numeral system, such numbers are easily representable. Compare it to one-third: 1/3. It becomes an endless fraction 0.33333(3).
// So, division by powers 10 is guaranteed to work well in the decimal system, but division by 3 is not. For the same reason, in the binary numeral system, the division by powers of 2 is guaranteed to work, but 1/10 becomes an endless binary fraction.
// There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system, just like there is no way to store one-third as a decimal fraction.
// The numeric format IEEE-754 solves this by rounding to the nearest possible number. These rounding rules normally don’t allow us to see that “tiny precision loss”, but it exists.

// We can see this in action:

alert( 0.1.toFixed(20) ); // 0.10000000000000000555
// And when we sum two numbers, their “precision losses” add up.

// That’s why 0.1 + 0.2 is not exactly 0.3.

//!fix
let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3 


// Hello! I'm a self-increasing number!
alert( 9999999999999999 ); // shows 10000000000000000
// This suffers from the same issue: a loss of precision. There are 64 bits for the number, 52 of them can be used to store digits, but that’s not enough. So the least significant digits disappear.
// JavaScript doesn’t trigger an error in such events. It does its best to fit the number into the desired format, but unfortunately, this format is not big enough.

//Tests: isFinite and isNaN

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

alert( NaN === NaN ); // false

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity

//parseInt, parseFloat 

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

//
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

alert( parseInt('2n9c', 36) ); // 123456


//Other math functions 


alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)


alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1


alert( Math.pow(2, 10) ); // 2 in power 10 = 1024