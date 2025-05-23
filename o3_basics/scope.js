var c = 30 //var does not follow the scope laws that we can modify this here and in a if statements scope or a functions scope
//which is something we do not want
//that is why we avoid using var

if(true)
    {
        let a = 10
        const b = 20
        var c = 20
    }


// console.log(a)
// console.log(b)
console.log(c) 


//now we see what happens when function is inside a function

function one()
{
    const username = "me"

    function two()
    {
        const email = "me@gmail.com"
        console.log(username)
    }

    // console.log(email) now this wont run because the inner function can take variables from the parent function that it resides in
    // but the parent function is unable to take variables from the child function that stays inside it


    two()
}

one()
// two() this wont run as well as the function that we have defined lives inside a function and within that scope so it cant be called in the global scope


if(true)
    {
        const username = "lmao"
        if(true)
            {
                const email = "lmao@gmail.com"
                console.log(username+email)
            }
        //console.log(email) //agaim this wont run because the nested if statement can take variables from the parent if statement
        //but the parent if statement cannot take variables from the child if statement
    }

// console.log(username) this wont run as well because the username is declared in the if scope which is not accessible in the global scope


console.log(one(5)) //this wont give an error when we try to run this before the actual call, this depends on how the function is called and defined

function one(num)
{
    return num+1
}


// console.log(addtwo(5)) this wil throw an error because we are trying to use a variable before it was declared this is called hoisting 

const addtwo = function(num)
{
    return num+2
}


// console.log(three)
// let three = 3 same way that this would give an error