//singleton unique of its type?
//Object.create this is a way to create an object through a constructor this is how singletons are made?

//if we use a different method to make an object there can be multiple instances
//to create a new object this is what we do

//obj literals
const newObj = {} //this is how we make an object right now this is an empty object

//this is how we create a symbol
const mySym = Symbol("mykey")

//this is how we add a symbol in an object 
const n1Obj = {name: "me", age : 18, isLoggedIn: false, lastLogIn : ["monday", "tuesday"], [mySym]: "key1"} //key value pairs the keys are treated as a string by js 

//symbol has to be wrapped inside [] brackets otherwise it will be a normal string 

console.log(n1Obj) //prints out the whole object with all its properties 


//to access something from an object we do this

console.log(n1Obj.name) //this prints the name 
//another way to access things from inside an object
console.log(n1Obj[mySym]) //string because as we said that the keys are treated as strings in js 

//to overwrite a value of an object
n1Obj.name = "you"

//to avoid overwrites or changes to the object we can freeze it by this
// Object.freeze(n1Obj) //now we wont be able to change the objets attributes

n1Obj.name = "me"

console.log(n1Obj)

n1Obj.Greetings = function(){ //this is how we link a function to a object, issue was that i freezed the object so nothing new was being added
    console.log("hi");
}


n1Obj.Greetings2 = function()
{
    console.log(`Hello my names is ${this.name}`) //to refer to a objects properties in functions we use this.attribute 

}

console.log(n1Obj.Greetings2()) //right now output is undefined 


//final notes symbols have to referred with square brackets when printing 


