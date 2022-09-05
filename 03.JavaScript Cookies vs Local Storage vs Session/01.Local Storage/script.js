// To set item in local storage
localStorage.setItem("name1","Kishore")
localStorage.setItem("name2","Kumar")

// To fetch the localstorage
console.log(localStorage.getItem('name'))
// this will return null if value not available

// To Remove the value
localStorage.removeItem('name2')

// return the length of local storage
console.log(localStorage.length) //1

// To remove all the data inside the localstorage
// localStorage.clear()