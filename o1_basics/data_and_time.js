let myDate = new Date() //this is an object

console.log(typeof myDate)
console.log(myDate.toString()) // this formats the time properly

myDate = myDate.toString().split(" ") //converts it into an array of strings

console.log(`Today the day is ${myDate[0]}`)

let date = new Date()

console.log(date.toJSON())

console.log(date.toLocaleString()) //normal format that we use 

let nDate = new Date(2023,0,23,5,3) //this how we define our date. year, month(yes months start from 0), date the other placeholders are for hours and minutes 
// there is one more the last one which is for second

console.log(nDate.toLocaleString())

let mDate = new Date("02-14-2023") //MM/DD/YY
console.log(mDate.toLocaleString())

let qDate = Date.now() //gives time in ms from 1970s date () after now needed because it is a method
console.log(qDate)

console.log(nDate.getTime())


//comparision always happens in ms in js but to get value in seconds 

console.log(Math.round(Date.now()/1000)) //value in seconds without decimals 


nDate  = new Date()
console.log(nDate.getDate())
console.log(nDate.getMonth())
//getYear subtracts current year from 1900 for some reason 
console.log(nDate.getFullYear())

console.log(nDate.toLocaleString('default', {
  weekday: "long"
}));
 //prints the whole day instead of short form there are more methods like this need to find through gpt or intellisense