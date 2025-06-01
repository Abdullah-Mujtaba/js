// promise is an object
//it means the eventual completion or failure of an asynchronous operation

const promiseOne = new Promise(function(resolve,rejet)
{
    //Do and async task
    //DB calls, cryptography, network calls
    setTimeout(function()
    {
        console.log("Async task is complete")
        resolve()
    },1000)
})

promiseOne.then(function()
{
    console.log("Promise is resolved")
})
 
// this is another way of doing promises 
new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log("task 2 is complete")
        resolve()
    },1000)
}).then(function(){console.log("task2 resolved")})


const promiseThree = new Promise(function(resolve, reject)
{
    setTimeout(function(){},1000) 
    resolve({username: "john", email: "john@john.com"})
})

promiseThree.then(function(user)
{
    console.log(user)
})

promiseFour = new Promise(function(resolve, reject)
{
    setTimeout(function(){
        let error = false
        if(!error)
        {
            resolve({username: "john", password: "1234"})
        }
        else
        {
            reject("Error: Something went wrong")
        }

    },1000)
})

//cant extract the value from a promise directly
const username = promiseFour.then((user) =>{console.log(user);}).then((username)=>{console.log(username)}).catch(function(err){console.log(err)})
