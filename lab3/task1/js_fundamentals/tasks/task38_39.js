function min(...arr) {
    let minVal = Infinity;
    for (let val of arr) {
        if (minVal > val) {
            minVal = val;
        }
    }
    return minVal;
}

console.log(min(1, 20, 300, 0, 34, -23, 44));


function pow(a, b = 1) {
    return a ** b;
}
console.log(pow(4, 2));