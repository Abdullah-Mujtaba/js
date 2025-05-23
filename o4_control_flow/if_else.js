/// we do not want our entire code to run we need some control that this block should only run when an event happens
//login is an event, we use if and else statments for those



let userLoggedIn = true
//this is how we use if 
if(userLoggedIn == true)
    {
        let id = 10
        console.log("user is logged in")
    }
else
{
    console.log("user is not logged in ")
}

// console.log(id)// again as we know this wont work outside as this was defined in the if scope

let value = 100

if(value < 100)
    {
        console.log("the value is less than 100")
    }
else if(value == 100) // additional check that when the if fails we can check here as well, 
    {
        console.log("the value is equal to 100")
    }
else
{
    console.log("there is no value")
}

// && and operator which checks 2 values at once, || if either is true it runs

let useEmail = "@website.com"
let gMail = "" //this is an empty string which will be treated as false

if(useEmail && gMail) //this works when both useEmail and gMail are true or have actual values
    {
        console.log("the user has gmail and email accounts")
    }

if(useEmail || gMail) // or that one of them was true
    {
        console.log("the user has either one of these")
    }

//not equal to operator != checks if a value is not equal to smth

if(2!=3)
    {
        console.log("two is not equal to 3")
    }

//if(true){} // this is a statement that always runs

//<, <=, >, >=, ==, ===(checks if they have the same datatype), !=

//another way of writing if statements

let number = 200
//this is how we can write an if statement as well in a single line, it assumes wtv is next to it is the scope of this to add more additional lines we add a comma and write the next statement

if(number == 200) console.log("number is equal to 200"), console.log("wow i am smart")