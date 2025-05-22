


function Hello() //how we define a function 
{
    console.log("hello world")
}


Hello() //function call 
// Hello -> function reference , Hello() -> function call(execution)

function addition(number1, number2) // these are parameters
{
    console.log(number1 + number2)
}

//parameters -> function defining
//argumenets -> function call

addition(2, "3")//these are arguements // what js would do is that convert 2 into a string as well and run the function
//wont throw an error 


function subtract(number1, number2)
{
    return number1 - number2
}

console.log(output = subtract(3, 2)) // so this is now returnign values 


//when nothing is passed in the argumenets of the function the arguement is undefined

function loginUser(username = "me") // this is how we pass default value 
{
    if(!username)
        {
            console.log("enter a name")
            return 
        }
    return `${username} logged in`
}

console.log(loginUser())


function calculatePrice(...number1){ //what ... does that right now it is being used as a rest operator what this does is when we do not know how many inputs we have we use this
    //when we return the parameter it becomes a list comprising of all the inputs for example
    return number1
}

console.log(calculatePrice(200,300,400)) //now due to the function having a rest operator what we get is an array consisting of 200,300 and 400

//another use case


function Summary(val1, val2, ...num1)
{
    return  num1
}
console.log(Summary(100,200,50,200)) //50 and 200 is now kept in the array and the other 2 values were stored in parameters val1 and val2 to access those we can also return them


//to pass an object to a function


const user = {
    name : "me",
    age : 18
}

function userDetails(anyObject) //in js we dont have to specifically tell the function that this is the datatype it will handle that on its own we 
//typescript does the checking but here in js we dont have that we have to do the checking by ourselves
{
    if(typeof anyObject != 'object')
    {
        return `My name is ${anyObject.name} and my age is ${anyObject.age}`

    }
    return `error object expected`

}

console.log(userDetails(1))

// console.log(user.isObject())