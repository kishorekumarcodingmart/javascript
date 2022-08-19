const person = {
    fname:" John",
    lname:" Doe",
    age: 25
}

// JavaScript for...in Loop
for (let data in person){
    console.warn(data,":",person[data])
}

// Adding New Properties
person.nationality = "English"
console.log(person)

// Deleting Properties
delete person.nationality

// Nested Objects
let myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }