// Converting Arrays to Strings
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()) //Banana,Orange,Apple,Mango
console.log(fruits.join(" ")) //Banana Orange Apple Mango

// Popping and Pushing
// pop() - remove last element
fruits.pop() //['Banana', 'Orange', 'Apple']

// push() - add elements at last
fruits.push("Kiwi") //['Banana', 'Orange', 'Apple', 'Kiwi']

// Shifting Elements
//shift() - remove the first element
fruits.shift()  //['Orange', 'Apple', 'Kiwi']

//unshift() - add elements in first
fruits.unshift("Lemon") //['Lemon', 'Orange', 'Apple', 'Kiwi']


// Merging (Concatenating) Arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const newArr = arr1.concat(arr2,arr3)

console.log(newArr) //['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan']

// Splicing and Slicing Arrays
    // The splice() method adds new items to an array.
    // The slice() method slices out a piece of an array.

const someFruits = ["Banana", "Orange", "Apple", "Mango"];
    someFruits.splice(2, 0, "Lemon", "Kiwi") //['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
    // (where, how many elements should be removed, new elements to be added.)

    // Using splice() to Remove Elements
    someFruits.splice(0, 1) //['Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
    // where new elements should be added (spliced in).
    // defines how many elements should be removed.

    const citrus = someFruits.slice(1, 3);
    console.log(citrus) //['Lemon', 'Kiwi']

