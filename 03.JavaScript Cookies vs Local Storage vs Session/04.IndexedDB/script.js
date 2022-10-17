function createDB(){
    // Create DataBase
    const dbName = document.getElementById("dbName").value
    const dbVersion = document.getElementById("dbVersion").value


    const request = indexedDB.open(dbName,dbVersion) //Return a Request

    request.onupgradeneeded = (e) => {
        alert("On Upgradeneeded")
    }

    request.onsuccess = (e) => {
        alert("On Success")
    }

    request.onerror = (e) => {
        alert("On Erorr")
    }

    console.log(request)
}

const btnCreateDb = document.getElementById("btnCreateDb")

btnCreateDb.addEventListener("click",createDB)
