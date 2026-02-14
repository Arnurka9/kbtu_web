// This code will do this thing (...) and that thing (...)
// ...and who knows what else...
// very;
// complex;
// code;

// There’s a great rule about that: “if the code is so unclear that it requires a comment, then maybe it should be rewritten instead”.


//factor out functions

/* I think I can write function isPrime in out of this scope
function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    //* check if i is a prime number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}

//* like this
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}
*/


//create functions

/* 
!bad decision
//* here we add whiskey
for(let i = 0; i < 10; i++) {
  let drop = getWhiskey();
  smell(drop);
  add(drop, glass);
}

//* here we add juice
for(let t = 0; t < 3; t++) {
  let tomato = getTomato();
  examine(tomato);
  let juice = press(tomato);
  add(juice, glass);
}

//* ...
*/

//* good practice
// addWhiskey(glass);
// addJuice(glass);

// function addWhiskey(container) {
//   for(let i = 0; i < 10; i++) {
//     let drop = getWhiskey();
//     //...
//   }
// }

// function addJuice(container) {
//   for(let t = 0; t < 3; t++) {
//     let tomato = getTomato();
//     //...
//   }
// }


//* describe the architecture (for example function)
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
// function pow(x, n) {
//   ...
// }