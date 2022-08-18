let stocks = {
    Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let shop = true


let orderAndProdunction = (time,work) => {
    return new Promise((resolve,reject)=>{
        if (shop){
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else{
            reject(console.log("Store is Closed Now!"))
        }
    })
}

orderAndProdunction(0000,()=>console.log("Ordering..."))

.then(()=>{
    return orderAndProdunction(2000,()=>{
        console.log(`Customer Choice : ${stocks.Fruits[0]} with ${stocks.liquid[1]} on ${stocks.holder[2]} with ${stocks.toppings[0]}`)
    })
})

.then(()=>{
    return orderAndProdunction(0000,()=>{
        console.log("Produnction Started")
    })
})

.then(()=>{
    return orderAndProdunction(2000,()=>{
        console.log(`Cutting the ${stocks.Fruits[0]}`) 
    })
})

.then(()=>{
    return orderAndProdunction(1000,()=>{
        console.log(`Adding ${stocks.liquid[1]}`) 
    })
})


.then(()=>{
    return orderAndProdunction(1000,()=>{
        console.log("Starting the Machine")
    })
})


.then(()=>{
    return orderAndProdunction(2000,()=>{
        console.log(`Placing on ${stocks.holder[2]}`)
    })
})

.then(()=>{
    return orderAndProdunction(3000,()=>{
        console.log(`Adding ${stocks.toppings[0]}`)
    })
})

.then(()=>{
    return orderAndProdunction(2000,()=>{
        console.log("Serving The Icecream...!")
    })
})


.catch(()=>{
    console.log("Customer Left!")
})

.finally(()=>{
    console.log("Day Ended!")
})