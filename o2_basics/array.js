//js arrays are resizable and can contain multiple elements of different types 
// shallow copy are those that refer to the same point in memory changes in one will result a change in the other as well 
// deep copy are those that do not refer to the same point in the memory 
//array copy operations are shallow-copy operations


const myarray = [1,2,3,4]
console.log(myarray[0])

const newarray = new Array(1,2,3,5,6)
console.log(newarray)

//array methods

newarray.push(7) //adds an element at the end 
console.log(newarray)

newarray.pop() //pops the last element from the array
console.log(newarray)

newarray.unshift(9) //this adds a value at the start of an array

console.log(newarray)

newarray.shift() //removes from the front of the array 
console.log(newarray)

console.log(newarray.includes(5))//tells if the element exists within the array 
console.log(newarray.indexOf(-2)) //-1 means that the element does not exist
console.log(newarray.indexOf(3))

const bigarray = newarray.join() //converts all the elements of the array into a string
console.log(bigarray)
console.log(typeof bigarray)


narray = bigarray.split(',')
console.log(narray)
console.log(typeof narray)



console.log("A", newarray)
let n1array = newarray.slice(0,3) //the last index is not included and the original array is not modified
console.log(n1array)
console.log("B", newarray)
let n2array = newarray.splice(0,3)
console.log("C", newarray) //the original elements are removed from 0-3 inclusive from the original array as well
console.log(n2array)



