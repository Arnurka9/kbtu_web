//27
let i = 3;

while (i) {
  console.log( i-- ); //3 2 1
}

//28
// The prefix form ++i:
i = 0;
while (++i < 5) console.log( i ); //1 2 3 4

// The postfix form i++
i = 0;
while (i++ < 5) console.log( i ); //1 2 3 4 5

// 29
for (let i = 0; i < 5; ++i) console.log( i ); //1 2 3 4
for (let i = 0; i < 5; i++) console.log( i ); //1 2 3 4

// 30
for (let i = 2; i <= 10; i++) (i % 2 == 0) ? console.log( i ) : void 0 //like pass; 

// 31
i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

//32
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//33 prime numbers from 2 to n

let n = Math.floor(Math.random() * 1000) + 1;
const primeNums = [];
for (let i = 2; i <= n; i++){
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        primeNums.push(i);
    }
}