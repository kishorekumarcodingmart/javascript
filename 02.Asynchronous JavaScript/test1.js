

let one = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1)
        },2000)
    })
}

let two = (val)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1+val)
        },2000)
    })
}

one().then((res)=>{
    console.log(res)
    return two(res)
})
.then((res)=>{
    console.log(res)
})

.catch((err)=>{
    console.error("Error: "+err)
})

.finally(()=>{
    console.log("Program Ended")
})
