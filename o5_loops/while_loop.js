//file for while loop another way of iteration 


let i = 0
while (i < 10) 
{
    console.log(`the value of i is ${i}`)
    i+=2     
}



let myArray = [1,2,3,4,5,6,7,8,9]

i = 0 //reinitialising the variable

while(i < myArray.length)
{
    console.log(myArray[i])
    i++
}


i = 7

do {
    i+=1
    console.log(`output from do while loop: the value of i is ${i}`)
} while (i < 6); //even though the condition is for 6 after runnign this loop we get the output from do while is 8 
//that happens because the conditions are checked at the end

//what do while loop does is runs some set of instructions first then checks the condition, 
//compared this to a normal while loop which checks the condition first then does the given set of instructions 
