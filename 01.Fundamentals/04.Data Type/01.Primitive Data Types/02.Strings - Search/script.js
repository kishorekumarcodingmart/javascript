// JavaScript Search Methods
//     String indexOf()
//     String lastIndexOf()
//     String startsWith()
//     String endsWith()

// indexOf() method returns the index of (the position of) 
// the first occurrence of a specified text in a string
let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate")) //7

console.log(str.lastIndexOf("locate")) //21


// The includes() method returns true if a string contains a 
// specified value.
let text = "Hello world, welcome to the universe."
console.log(text.includes("world"))  //true


let txt = "Hello world, welcome to the universe.";
console.log(txt.startsWith("Hello")) //true
console.log(text.endsWith("Doe")) //false