let promise = Promise.all([
    new Promise((resolve)=>{setTimeout(()=>{resolve(1)}),3000}),
    new Promise((resolve)=>{setTimeout(()=>{resolve(2)}),2000}),
    new Promise((resolve)=>{setTimeout(()=>{resolve(3)}),1000}),

])

.then((res)=>console.log(res))

// Let’s say we want many promises to execute in parallel 
// and wait until all of them are ready.