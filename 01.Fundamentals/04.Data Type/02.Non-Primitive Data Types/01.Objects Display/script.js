// Some common solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Displaying the Object Properties by name
console.warn(person.name) //John

// Displaying the Object Properties in a Loop
for (let variable in person){
    console.log(variable,person[variable])
}

// Displaying the Object using Object.values()
console.log(Object.values(person))  //['John', 30, 'New York']

// Displaying the Object using JSON.stringify()
let str = JSON.stringify(person)
console.log(str) //{"name":"John","age":30,"city":"New York"}
// type is string