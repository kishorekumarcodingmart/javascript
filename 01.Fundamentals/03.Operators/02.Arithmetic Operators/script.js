// Operator	    Example	            Same As
// =	        x = y	        x = y
// +=	        x += y	        x = x + y
// -=	        x -= y	        x = x - y
// *=	        x *= y	        x = x * y
// /=	        x /= y	        x = x / y
// %=	        x %= y	        x = x % y

// <<=	        x <<= y	        x = x << y
// >>=	        x >>= y	        x = x >> y
// >>>=	        x >>>= y	    x = x >>> y
// &=	        x &= y	        x = x & y
// ^=	        x ^= y	        x = x ^ y
// |=	        x |= y	        x = x | y
// **=	        x **= y	        x = x ** y


let num1 = 10
let num2 = 5

console.log(num1+=num2) //Addition - 15
console.log(num1-=num2) //Subtration - 10
console.log(num1*=num2) //Multiplies - 50
console.log(num1/=num2) //Divide - 10
console.log(num1%=num2) //Exponentiation - 0

console.log("\n")

let x = 4
let y = 2

console.log(x <<= y) //16
console.log(x >>= y) //4
console.log(x >>>= y) //1
console.log(x &= y) //0
console.log(x ^= y) //2
console.log(x |= y) //2
console.log(x **= y) //4

