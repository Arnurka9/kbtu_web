//1
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john") == "John");

//2

function checkSpam(str) {
    str = str.toLowerCase();
    if (str.includes("xxx") || str.includes("viagra")) {
        return true;
    }
    return false;
}

console.log(checkSpam('buy ViAgRA now') == true)
console.log(checkSpam('free xxxxx') == true)
console.log(checkSpam("innocent rabbit") == false)

//3

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}


truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

truncate("Hi everyone!", 20) == "Hi everyone!"


//4

function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 ); // true