let name ="lmao"
console.log(name.length)
console.log(name[1])


console.log(`Hello my name is ${name} and my name begins with ${name[0]}`) //use backticks for string interpolation
console.log(name.toUpperCase()) //note it did not change the original one as this is a copy of the original one because of stack memory
console.log(name.charAt(2)) //pass numbers
console.log(name.indexOf('m'))

console.log(name.substring(0,3)) //the ending index word wont be added 3 wala add nahi hoga final mein because counting starts from 0

//l:-4,m:-3,o:-2,a:-1 in reverse order

let newName = "     max     "
console.log(newName)
console.log(newName.trim()) //removes the extra spaces

const url = "https://john.com/cena%20john"

console.log(url.replace('%20','-')) // replaces something with the other
console.log(url.includes("me")) //tells if one thing exists in the string or not

name = "john-cena-max"
console.log(name.split('-')) //splits the string based on this and converts them into an array

