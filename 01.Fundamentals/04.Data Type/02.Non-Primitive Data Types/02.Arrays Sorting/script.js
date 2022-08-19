// Sorting an Array
// The sort() method sorts an array alphabetically

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // ['Apple', 'Banana', 'Mango', 'Orange']

fruits.reverse() // ['Orange', 'Mango', 'Banana', 'Apple']

// Numeric Sort
const points = [40, 100, 1, 5, 25, 10]
// Accending
points.sort(function(a,b){return a-b}) //[1, 5, 10, 25, 40, 100]
// Decending
points.sort(function(a,b){return b-a}) //[100, 40, 25, 10, 5, 1]
