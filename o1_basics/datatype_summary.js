

//primitive data types are the ones that are called by value we get an actual copy of the data and changes are made in that copy
// string, boolean, number, null, undefined, symbol, bigInt

//js is dynamically typed language because we do not specifically tell js what value we are assigning to the variable



// nonprimitve data type is that which is called by reference like pointers from C++, array, functions, objects
const heroes = ["po","doreamon"] //this is an array and is a reference type

let myObj = {
    name: "me",
    age:18
}// this is how we define an object (key value pair like dictionary in python?)


const myFunction = function()
{
    console.log("hello")
}
 
let a = null



const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId) /// the returned value for both of them is different 


console.log(typeof a) //null returns a datatype of object and function returns a data type of function we call it object function 
