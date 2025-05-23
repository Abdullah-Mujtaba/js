
for (let i = 0; i < 10; i++) {
    console.log(i)
    if(i == 5)
        {
            console.log("i is now 5")
        }
    console.log("hi")
    
}

//the variable i wont be accessible outside because of the scope


//we can use loops inside a loop

for(let i = 0; i < 5; i++)
    {
        console.log("I am the outer loop: ", i)
        for(let j = 0 ; j <=2; j++)
        {
            console.log("I am the inner loop", j)
        }
}
//note j cant be used inside the outer loop but the i can be used inside the inner loop

let myArray = [1,2,4,5,6,7,89]

for(let i = 0; i<myArray.length; i++)
    {
        console.log(`Array element ${i} is ${myArray[i]}`)
    }


//imagine we have a scenario where we want to write a for loop and exit the loop when number 5 is detected for that we do this

for (let i = 0; i <= 10; i++) {
    if(i == 5)
        {
            console.log("number 5 exit the loop")
            break //to break out the loop on a condition we use an if statement and in that condition use break to exit the loop
        }
    console.log(`The number right now is ${i} waiting for 5`)
}
//there is something called continue now imagine if there are 10 more lines below the if statement which we want to skip if we get number 5
for (let i = 0; i <= 7; i++) {
    if(i == 5)
        {
            console.log("number 5 exit the loop")
            continue //what this does is that as soon as we detect 5 it skips over everything that is down and then goes onto the next iteration 
        }
    console.log(`The number right now is ${i}`) //this is the statement which we have right

    if(true) //another statement that we have arbitrary
        {
            console.log("hi")
        }
}


