let promise = Promise.any([
    new Promise((resolve)=>setTimeout(()=>resolve(1),1000)),
    new Promise((resolve)=>setTimeout(()=>resolve(2),2000)),
    new Promise((resolve)=>setTimeout(()=>resolve(3),500))
])

.then((res)=>console.log(res))

// Similar to Promise.race, 
// but waits only for the first fulfilled promise and gets its result.