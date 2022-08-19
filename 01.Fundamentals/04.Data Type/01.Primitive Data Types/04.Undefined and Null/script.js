// There are several differences between null and undefined, 
// which are sometimes understood as the same.

// Definition:

// Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript.

// Undefined: It means the value does not exist in the compiler. It is the global object.

let Name = undefined
console.log(Name)

Name = null
console.log(Name)

console.log(typeof undefined) //undefined
console.log(typeof null) //object

console.log(undefined == null) //true
console.log(undefined === null) //false

