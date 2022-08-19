// An array is a special variable, which can hold more than one value:

const cars = ["Saab", "Volvo", "BMW"]

// It is a common practice to declare arrays with the const keyword.

// You can also create an array, and then provide the elements:

// Example
const car = [];
car[0]= "Saab";
car[1]= "Volvo";
car[2]= "BMW";

console.log(car) //['Saab', 'Volvo', 'BMW']

// Accessing Array Elements
// You access an array element by referring to the index number:
console.warn(cars[0])

// Arrays are Objects
console.log(typeof cars) //object

// Array Properties and Methods
console.log(cars.length) //3
cars.sort()
console.log(cars) //['BMW', 'Saab', 'Volvo']

// Array Indexing First and Last 
console.warn(cars[0]) //BMW
console.warn(cars[cars.length - 1]) //Volvo


// Looping Array Elements
for (let i = 0; i<cars.length; i++){
    console.log(cars[i])
}

// The Difference Between Arrays and Objects
    // In JavaScript, arrays use numbered indexes.  
    // In JavaScript, objects use named indexes.