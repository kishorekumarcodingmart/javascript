// JavaScript has only one type of number. 
// Numbers can be written with or without decimals.

let num1 = 12
let num2 = 12.32

// Integers (numbers without a period or exponent notation)
//  are accurate up to 15 digits.

num1 = 999999999999999 
num2 = 9999999999999999

console.log(num1) //999999999999999
console.log(num2) //10000000000000000

// Floating Precision
// Floating point arithmetic is not always 100% accurate:   
let x = 0.2 + 0.1
console.log(x) //0.30000000000000004

// To solve the problem above, it helps to multiply and divide:
x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x) //0.3


// NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a 
// legal number.

console.log(100 / "Apple") //NaN
console.log(100 / "10") //10

// You can use the global JavaScript function isNaN() to 
// find out if a value is a not a number:
console.log(isNaN("Hello"))  //true
console.log(isNaN("12"))  //false

console.log(typeof NaN) //number


// Infinity
console.log(Infinity) //Infinity

// Hexadecimal
console.log(0xFF) //255



