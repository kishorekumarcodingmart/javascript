
//  the console is an object which provides access to the browser debugging console.

// Mainly used to log(print) the output to the console.
console.log("Hello World")

// This method is used to log error message to the console.
// By default the warning message will be highlighted with red color. 
console.error("This is Error")

// Used to log warning message to the console. 
// By default the warning message will be highlighted with yellow color. 
console.warn("This is Warning")

// Used to clear the console. 
// The console will be cleared, in case of Chrome a simple overlayed text will be
//  printed like : ‘Console was cleared’ while in Firefox no message is returned.
// console.clear() 

// console.time() and console.timeEnd()
// to know the amount of time spend by a block or a function
console.time('func')

function func(){
    setTimeout(()=>{
        console.log("HelloWorld")
    },5000)
}

func()

console.timeEnd('func')


// This method allows us to generate a table inside a console. 
// The input must be an object which will be shown as a table. 
console.table({"a":12,"b":90})


// This method is used to count the number that the function 
// hit by this counting method. 
for (let i = 0; i<4; i++){
    console.count(i)
}

// console.group() and console.groupEnd()
console.group("Block")
    console.log("Block of Log")
    console.error("Block of Error")
    console.warn("Block of Warn")
console.groupEnd("Block")

// Custome Console
const style = `padding:10px; color:red; border:2px solid black; font-size:2em;`

console.log("%cKishore Kumar",style)