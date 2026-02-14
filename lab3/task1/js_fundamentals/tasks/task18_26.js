//18
console.log( null || 2 || undefined ); //2
//19
console.log( console.log(1) || 2 || console.log(3) ); //1 2
//20
console.log( 1 && null && 2 ); //null
//21
console.log( console.log(1) && console.log(2) ); //1 undefined
//22
console.log( null || 2 && 3 || 4 ); //3

//23
const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let age = Number(input[0]);

if (age >= 14 && age <= 90) {
    console.log(age);
}

//24
if (14 > age || age > 90) {
    console.log(age);
}

//25
if (-1 || 0) console.log( 'first' ); //'first'
if (-1 && 0) console.log( 'second' );
if (null || -1 && 1) console.log( 'third' ); //'third'

//26
let userName = input[1]?.trim()
console.log("Who's there?", '');

if (userName === 'Admin') {

  let pass = input[2]?.trim();
  console.log('Password?', '');

  if (pass === 'TheMaster') {
    console.log( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    console.log( 'Canceled' );
  } else {
    console.log( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  console.log( 'Canceled' );
} else {
  console.log( "I don't know you" );
}