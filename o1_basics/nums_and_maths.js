let score = 100
let value = new Number(200) //this specifies it that this has to be a number

//also we can convert the number to a string and use more methods like length etc

console.log(typeof score.toString()) // now we can see it has become a string
console.log(value)

let newValue = 100.356

console.log(newValue.toFixed(3)) //this specifies after the decimal point how many numbers we want 
const otherNumber = 213.678
console.log(otherNumber.toPrecision(4)) //for rounding off and precise calculations priority is given to before the decimal 

const hundreds = 1000000
console.log(hundreds.toLocaleString()) //what this does is adds commas after every 3 zeroes for better formatting 


/* MATHS */

console.log(Math)
console.log(Math.abs(-3)) //for using absolute value
console.log(Math.round(3.4)) //rounds down to 3
console.log(Math.round(3.7)) //rounds up

//Math is an object which has a lot of methods
// we can also use ceil and floor works same as C++
const arr = [3,4,5,6]
console.log(Math.min(...arr)) //this is how the array is passed with ... if we dont do that it will return NaN
console.log(Math.random()) //generates random value from 0 - 1 to get values that we want like example from 1 to 6 what we can do is this
console.log(Math.round((Math.random()*6) + 1)) //what this does is generates random value from 0 to 1 using round so that we ignore the decimal values 


let min = 20
let max = 40
let range = max - min  
console.log(Math.round(((Math.random()*range) + 1) + min))
//addition of is done to avoid the value of 0 
