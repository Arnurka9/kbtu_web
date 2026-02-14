const input = require('fs').readFileSync(0, 'utf8').trim();    

let value = input;

if (value > 0){
    console.log(1);
} else if (value < 0) {
    console.log(-1);
} else {
    console.log(0);
}