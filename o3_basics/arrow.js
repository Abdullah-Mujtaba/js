const user =
{
    username: "me",
    price: 10,
    welcomeMessage: function() //this is how we can make a function an attribute of an object
    {
        console.log(`${this.username} welcome to the website `)
        console.log(this)// this will tell what the current context is tells about current variables and its value
    }
}
 //whenever we want to access something that is within the current context we use this in the above example the current context is the object so that is why we have used this

user.welcomeMessage() //this is how we call the method that is dedicated for an object


user.username = "lmao" //this is where the context changed

//instead of hardcoding a value what we did was with this is that wtv the context or wtv the value it gets it passes that in the print statement

user.welcomeMessage()

console.log(this) //this returns an empty context, we are in the node environment and it is refering to an empty object because no context in global


//global object is window in browser js 


function n1()
{
    let username = "sam"
    console.log(this) //here it tells all the function details 
    console.log(this.username) // this is undefined because (this) only works for objects not in functions 
}

n1()


const n2 = () => 
{
    let username = "max"
        console.log(this) //returns {}, here it wont tell the function details
        //the difference is how we have defined the function 
        console.log(this.username) //returns undefined because it has no clue what we are talking aboiut also this only works for objects
}

const addtwo = (num1,num2) => { //this one way of declaring an arrow function note that when we use {} we have to write return statement
        return num1 + num2
}
 
() => {} //typical way of defining an arrow function, we have saved them in a variable in this file but this is how we can do that as well
 

console.log(addtwo(3,4))


//another way of writing arrow functions without using return statement


const addnumbers = (num1, num2) => (num1+ num2) //when we use () brackets to tell what we are doing we dont write return used a lot in react this is called implicit return 

console.log(addnumbers(2,3))

//to return an object

const returnObj = () => ({username: "max"}) // if we dont use this and do this isntead

const returnObj1 = () => {
    return {username: "max"} //another way of doing the same thing with {}
} //gives an error

console.log(returnObj())