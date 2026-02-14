let sum = (a, b) => a + b;
console.log(sum);

let double = n => n * 2;
console.log(double);

let sayHi = () => console.log("Hi!");
let age = 15;

let welcome = (age < 18) ? 
  () => console.log("Hello!") :
  () => console.log("Greetings!");

welcome()

//multiline arrow functions 
let sum2 = (a, b) => {
    let result = a + b;
    return result;
}
console.log(sum2);