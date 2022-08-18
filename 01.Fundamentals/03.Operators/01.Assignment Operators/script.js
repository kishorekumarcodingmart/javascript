// Operator	Description
// +	    Addition
// -	    Subtraction
// *	    Multiplication
// **	    Exponentiation (ES2016)
// /	    Division
// %	    Modulus (Remainder)
// ++	    Increment
// --	    Decrement


// Addition
console.warn("Addition")
console.log(12+12) //24
console.log("Kishore " + "Kumar") //Kishore Kumar
console.log("Kishore" + 18)  //Kishore18 - typeof string
console.log(12 + "Kishore") //12Kishore - typeof string

console.log("\n")

// Subtraction
console.warn("Subtraction")
console.log(12-12) //0


console.log("\n")

// Multiplication
console.warn("Multiplication ")
console.log(12*12) //144

console.log("\n")

// Exponentiation
console.warn("Exponentiation")
console.log(2**4) //16

console.log("\n")

// Division
console.warn("Division")
console.log(5/2) //2.5  

console.log("\n")

// Modulus
console.warn("Modulus")
console.log(5%2)  //1

console.log("\n")

// Increment
console.warn("Increment")


console.group("Pre Increment")
    let num = 5

    console.log(++num)

console.groupEnd("Pre Increment")

console.group("Post Increment")
    num = 5

    console.log(num++)

console.groupEnd("Post Increment")

console.log("\n")

// Decrement
console.warn("Decrement")


console.group("Pre Decrement")
    let nums = 5

    console.log(--nums)

console.groupEnd("Pre Decrement")

console.group("Post Decrement")
    nums = 5

    console.log(nums--)

console.groupEnd("Post Decrement")