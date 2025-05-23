const userEmail = " " //this is not an empty string contains a space so this is a true value
const newEmail ="" //this is a false value because it has nothing

//some more false values
//0,-0,false,"",null,undefined,NaN, BigInt 0n

//some true values
//all those which are not false
// 'false', '0' some examples these are not false as they are inside a string 
//[] an empty array is also a true value, function(){} an empty function is also a true value


let myArray = []
console.log(myArray.length)

//to find an objects length

let myObj = {name: "me" , age: 100}

console.log(Object.keys(myObj).length) //Object.keys(myObj) takes all the keys from an Object and puts them in an array now since we have an array we can use length to check how big it is

//terniary operator

let num = 50

num >= 50 ? console.log("number is 50") : console.log("number is not 50") //another way of writing conditions, use if and else for sanity 