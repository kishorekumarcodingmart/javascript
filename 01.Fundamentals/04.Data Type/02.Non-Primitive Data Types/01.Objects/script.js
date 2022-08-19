// The Object type represents one of JavaScript's data types. 
// It is used to store various keyed collections and more complex entities.

let details = {
    fname : "Kishore",
    lname : "Kumar",
    age : 21,
    phone : {
        company : "Vivo",
        model : "Y20",
    },
    getFullName : function() {return this.fname + " " + this.lname}
}

// To call a function inside object
console.log(details.getFullName()) //Kishore Kumar

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

// To acces the elements in objects
console.log(person.firstName) //John
console.log(person['lastName']) //Doe