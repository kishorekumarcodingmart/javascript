// To set item in local storage
sessionStorage.setItem("name1","Kishore")
sessionStorage.setItem("name2","Kumar")

// To fetch the localstorage
console.log(sessionStorage.getItem('name'))
// this will return null if value not available

// To Remove the value
sessionStorage.removeItem('name2')

// return the length of local storage
console.log(sessionStorage.length) //2

// To remove all the data inside the localstorage
// sessionStorage.clear()

console.log(sessionStorage.key(1))
// IsThisFirstTime_Log_From_LiveServer