let promise = Promise.race([
    new Promise((resolve)=>setTimeout(()=>resolve(1),3000)),
    new Promise((resolve)=>setTimeout(()=>resolve(2),2000)),
    new Promise((resolve)=>setTimeout(()=>resolve(3),5000))
])

.then((res)=>console.log(res))

// Similar to Promise.all,
//  but waits only for the first settled promise and gets its result 