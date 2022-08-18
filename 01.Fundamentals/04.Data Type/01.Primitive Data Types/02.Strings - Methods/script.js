// Extracting String Parts
let Name = "Kishore Kumar"

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

console.log(Name.slice(0,7)) //Kishore

// difference is that start and end values
//  less than 0 are treated as 0 in substring
console.log(Name.substring(-1,7))


console.log(Name.substr(8,5))  //Kumar


// Replacing String Content
let txt = "Change the Content"
console.log(txt.replace("Change","Changed")) //Changed the Content

// Converting to Upper and Lower Case
console.log("hello world".toUpperCase())
console.log("HELLO WORLD".toLowerCase())


// String concat()
let fname = "Kishore"
let lname = "Kumar"
console.log(fname.concat(" ",lname)) //Kishore Kumar

// String trim()
console.log("      Text Trim      ".trim())

// String charCodeAt() - ASCII Value
console.log("A".charCodeAt()) //65


// Converting a String to an Array
const abc = "abcdefg"
let arr = abc.split("")
console.log(arr) //['a', 'b', 'c', 'd', 'e', 'f', 'g']