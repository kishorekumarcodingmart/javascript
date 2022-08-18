// 1.The toString() Method
console.warn("toString()")
let x = 123;
console.log(typeof x.toString()) //string
console.log(typeof (100 + 23).toString()) //123 + string

// 2.The toFixed() Method
// toFixed() returns a string, with the number written with a specified number of decimals:
console.warn("toFixed()")
x = 9.656;
console.log(x.toFixed(0)) //10
console.log(x.toFixed(2)) //9.66
console.log(x.toFixed(4)) //9.6560
console.log(x.toFixed(6)) //9.656000

// 3.The toPrecision() Method
// toPrecision() returns a string, with a number written with a specified length:
console.warn("toPrecision()")
x = 9.656;
console.log(x.toPrecision()) //9.656
console.log(x.toPrecision(2)) //9.7
console.log(x.toPrecision(4)) //9.656
console.log(x.toPrecision(6)) //9.65600

// Converting Variables to Numbers
// There are 3 JavaScript methods that can be used to convert variables to numbers:

// The Number() method
// The parseInt() method
// The parseFloat() method
console.warn("Converting Variables to Numbers")
console.log(Number("18"))
console.log(parseInt("12"))
console.log(parseFloat("12.123"))

// Number Properties
// Property	            Description
// MAX_VALUE	        Returns the largest number possible in JavaScript
// MIN_VALUE	        Returns the smallest number possible in JavaScript
// POSITIVE_INFINITY	Represents infinity (returned on overflow)
// NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
// NaN	                Represents a "Not-a-Number" value