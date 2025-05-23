//reduce function what it does is reduces an array to something like for example takes a number of arrays total them and reduces them to a sum
let myArray = [1,2,3,4,5,6]

let total = myArray.reduce(function(acc,currval)
{
    return acc+currval
},0)


console.log(total)

let summary = myArray.reduce((acc,curr) => (acc+curr),0) //at the end we pass the initial value for the accumulator
console.log(summary)

const shoppingCart = [{itemName: "brush", price: 200}, {itemName: "broom", price:10}, {itemName:"shampoo",price:50}]

let cartTotal = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(cartTotal)