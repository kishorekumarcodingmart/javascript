const numbers = [45, 4, 9, 16, 25];
const fruits = ["Apple", "Orange", "Apple", "Mango"];

//1. forEach()
// value, index, array
console.warn("forEach - value, index, array")
numbers.forEach((val,index,Array)=>{
    console.log(val,index,Array)
})
// Does not return any value
console.log("\n")


//2. map()
console.warn("map - value, index, array")
let Map = numbers.map((val,index,arr)=>{
    return val*2
})
console.warn(Map)
// return new array
console.log("\n")


// 3.filter()
console.warn("filter - value, index, array")
let Filter = numbers.filter((val,index,arr)=>{
    return val%2===0
})
console.warn(Filter)
// return new array
console.log("\n")


// 4.reduce() - left-to-right
console.warn("reduce - total, value, index, array")
let sum = numbers.reduce((total,val,index,arr)=>{
    return total + val 
})
console.log(sum)
// return new value
console.log("\n")


// 5.reduceRight() - right-to-left
console.warn("reduceRight - total, value, index, array")
sum = numbers.reduceRight((total,val)=>{
    return total + val
})
console.log(sum)
// return new value
console.log("\n")

// 6.every() - true or false
console.warn("every - value, index, array")
let allValOver18 = numbers.every((val,index,arr)=>{
    return val >18
})
console.log(allValOver18)
// return boolean value
console.log("\n")

// 7.some() - true or false
console.warn("some - value, index, array")
allValOver18 = numbers.some((val,index,arr)=>{
    return val>18
})
console.log(allValOver18)
// return boolean value
console.log("\n")


// 8.indexOf() - indexVals
console.warn("indexOf - item, start")
let position = fruits.indexOf("Apple",1)
console.log(position) //2
// return indexing Values
console.log("\n")


// 9.lastIndexOf() - indexVals
console.warn("lastIndexOf - item, start")
position = fruits.lastIndexOf("Apple",1)
console.log(position) //0
// returns the position of the last occurrence of the specified element.
// return indexing Values
console.log("\n")


// 10.find() - return val
// returns the value of the first array element that passes a test function.
console.warn("find - value, index, array")
let first = numbers.find((value, index, array)=>{
    return value>18 //45
})
console.log(first)
console.log("\n")


// 11.findIndex() - return indexValue
// returns the index of the first array element that passes a test function.
console.warn("findIndex - value, index, array")
first = numbers.findIndex((val,index,arr)=>{
    return val>18 //0
})
console.log(first)
console.log("\n")

// 12.from() - return new array
// returns an Array object from any object with a length property or any iterable object.
console.warn("Array.from - string")
let newArr = Array.from("KISHORE")
console.log(newArr)
console.log("\n")

// 13.Keys() - returns an Array Iterator object with the keys of an array.
console.warn("keys")
let keys = fruits.keys();

for (let i of keys){
    console.log(i)
}
console.log("\n")

// 14.entries() - returns an Array Iterator object with key/value pairs.
console.warn("entries")
keys = fruits.entries();

for (let i of keys){
    console.log(i)
}
console.log("\n")

// 15.includes() - This allows us to check if an element is present in an 
// array (including NaN, unlike indexOf).
console.warn("includes - search item");
let get = fruits.includes("Mango")
console.log(get) //true
console.log("\n")


