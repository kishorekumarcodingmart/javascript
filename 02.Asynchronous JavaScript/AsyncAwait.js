let one = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello")
        },3000)
    })
}

let two = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Kishore")
        },0000)
    })
}

async function run(){
    try{
        let One = await one()
        let Two = await two()
        console.log(One)
        console.log(Two)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Program Ended")
    }
}


run()