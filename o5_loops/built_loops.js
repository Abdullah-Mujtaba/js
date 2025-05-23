
//we can iterate over arrays let them be filled with strings or objects
// ["","",""]
// [{},{},{}] array made out of object



myArray = [1,2,3,4,5,6]

number = 0 

//forof loops
//here we after const we have the iterator and then after of is the thing on which we want to run the loop, the forof loop is smart enough to know the value of the array
for (const number of myArray) 
{
    console.log(`Element inside the array is: ${number}`)    
}


//we can also loop over a string and print its characters that it has
let myString = "hello world"

// console.log(myString[2]) we can do this in js
 

for (const i of myString) {
    console.log(i)
}



//maps , are key value pairs the carry unique keys and store the order of the information that it came in 

let myMap = new Map()
myMap.set("PKR", "Pakistani Ruppee")
myMap.set("INR", "Indian Ruppee")
myMap.set("Riyal", "DXB riyal")
// myMap.set("PK","Pakistani Ruppee")
console.log(myMap)

///we can use forof loop on maps as well
for (const key of myMap) 
{
    console.log(key) // this will give arrays equal to the same amount of keys inside the map and also gives the values in the same pair
    // ["PKR", 'Pakistani Ruppee] example of one of the outputs
}


for (const [key] of myMap) {
    console.log(key)// now it prints all the keys of the map note that we have to write in this syntax [iterator] ib forof statmenet after const
}


for (const [key, value] of myMap) {
    console.log(key, value) //this now prints the key and its value in the same line, note to do that we do this [key, value] in forof statement after const
    //PKR Pakistani Ruppee
}


const myObject = 
{
    js: "javascript",
    pyth: "python",
    cpp: "C++",
    C: "C lang"
}

// to loop over Objects(js) we use forin loops
for (const val in myObject)
    {
        console.log(`The key is ${val} and the value is ${myObject[val]}`)
    }
    
//forin loop prints only the indexes of an array
for (const key in myArray) {
    console.log(key) //prints the index of the array to print the values as well
    console.log(myArray[key]) //this prints the values as well
}

//forin loop does not work on maps 

//the parameter of the function is nothing but the alias of the elements inside of the array that we are going to use 
//same as i in for loops
//for each loop has access to array, array elements and array index. It already knows the array size so we don't have to specify it
myArray.forEach(function(item,index,array)
{console.log(`The details of the array are, the item is ${item}, the index of that item is ${index}, the whole array is this ${array}`)})


//we can also call a function inside forEach loop that we have defined 

function print(item,index)
{
    console.log(`This ${item} occurs at this index ${index}`)
}

myArray.forEach(print) // here we do not call the function we just pass the reference to it, remember first parametr is element, index and then array

//inside foreach we can also use arrow functions for callback

myArray.forEach((item) => {console.log(item)})

//to iterate over an array which contains objects we do this, we use foreach loop specific to array 

let objArray = [{name: "javascript", cool:"yes"}, {name: "C++", cool:"yes"}, {name:"python", cool:"no"}] // an array that has all our objects

objArray.forEach((item)=> {
    console.log(`the language name is ${item.name} and the cool factor is ${item.cool}`)
}) //this is how we iterate over objects that are stored in an array


//note this is usfeul because when we fetch data from database it is returned in array and the elements are objects eg name: ---, price:--- etc