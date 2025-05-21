
let age = 18 
let sAge = String(age) // this is how we convert something to another data type
console.log(typeof sAge)

let score = "123abc" // now if we convert this we get a problem that this is NaN (not a number)

let newScore = Number(score)
console.log(newScore) // NaN is printed

console.log(typeof newScore) //however we still get the output that this is a number

let a = null
let newA = Number(null)

console.log(newA)
console.log(typeof newA) //this will return a 0 so be careful when comparing

let b = undefined
let newB = Number(b)
console.log(newB)
console.log(typeof newB) //this will return NaN again

//the value of true when converting to Number is 1 and when converting false to Number we get 0 which is what happens in all the languages except for C which does not have true and false
// some type of strings wont be converted to Number like a name etc they will also result in NaN

let isLoggedIn = 1
let newIsLoggedIn = Boolean(isLoggedIn)
console.log(newIsLoggedIn) //indeed true is equal to 1
//an empty string when converted to boolean will return false and when a string which has something will return true

let str1 = "hi"
let str2 = " name"
let str3 = str1 + str2
console.log(str3) //this is how we add 2 strings


console.log(1 + 2 + "3") // now this gave 33 but
console.log("2" + 1 + 3) //this gave a different result to fix this use () to specify which operation happens first
//this happens because if the first entry is of type string every other thing would be converted to a string
//but if the string is at the end of the log then first the operation that was defined would happen 


//++i first increment then use
//i++ first use then increment


