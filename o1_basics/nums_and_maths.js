let score = 100
let value = new Number(200) //this specifies it that this has to be a number

//also we can convert the number to a string and use more methods like length etc

console.log(typeof score.toString()) // now we can see it has become a string
console.log(value)

let newValue = 100.356

console.log(newValue.toFixed(3)) //this specifies after the decimal point how many numbers we want 
const otherNumber = 213.678
console.log(otherNumber.toPrecision(4)) //for rounding off and precise calculations priority is given to before the decimal 

