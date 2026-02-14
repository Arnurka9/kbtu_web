function Calculator() {
    this.read = function() {
        this.a = Number(prompt("a?"));
        this.b = Number(prompt("b?"));
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); 


//or 

function Calculator() {}

Calculator.prototype.read = function() {
  this.a = +prompt('a?', 0);
  this.b = +prompt('b?', 0);
};

Calculator.prototype.sum = function() {
  return this.a + this.b;
};

Calculator.prototype.mul = function() {
  return this.a * this.b;
};