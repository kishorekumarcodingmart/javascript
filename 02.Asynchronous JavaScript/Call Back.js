// ref : https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

let stocks = {
    Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
 
 
 
let order = (callProdunction,fruit,liquid,holder,toppings)=> {
    console.log("Ordering...")
    setTimeout(() => {
        console.log(`Customer Choice : ${stocks.Fruits[fruit]} with ${stocks.liquid[liquid]} on ${stocks.holder[holder]} with ${stocks.toppings[toppings]}`)
        callProdunction(fruit=stocks.Fruits[fruit],
            liquid=stocks.liquid[liquid],
            holder=stocks.holder[holder],
            toppings=stocks.toppings[toppings])
    },2000)
}


let production = (fruit,liquid,holder,toppings) => {
    setTimeout(() => {
        console.log("Produnction Started")
        setTimeout(()=>{
            console.log(`Cutting the ${fruit}`)
            setTimeout(()=>{
                console.log(`Adding ${liquid}`)
                setTimeout(()=>{
                    console.log("Starting the Machine")
                    setTimeout(()=>{
                        console.log(`Placing on ${holder}`)
                        setTimeout(()=>{
                            console.log(`Adding ${toppings}`)
                            setTimeout(()=>{
                                console.log("Serving The Icecream...!")
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0000)
}


order(production,fruit=0,liquid=1,holder=2,toppings=0)