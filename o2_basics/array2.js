heroes = ["me","you","us"]
heroes2 = ["they","them","we"]

heroes.push(heroes2)
console.log(heroes)

//push gives  an array inside an array to access the elements of the second array we do this
//heroes[3][2] this gives the third element of the second array

const allheroes =  heroes.concat(heroes2) //concat gives a new array which adds all the content from both the arrays issue was we were not saving it before
console.log(allheroes)


heroes.unshift(heroes2) //this does the same but adds the array at the start
console.log(heroes)



newheroes = [...heroes, ...heroes2] //... is a spread operator spreads all the elements of an array
console.log("A",newheroes)


const arr = [3,4,5,6]
console.log(Math.min(...arr)) //this is how the array is passed with ... if we dont do that it will return NaN
//this is how we used it before, the spread operators spreads/takes out all the values from the array 
//with concat we can pass only one array at a time with spread we can do multiple 

another_array = [1,2,3,4,[3,4],[3,5,[6,7]]] //this a complex array which we wont encounter but to make it proper usable array we do this
real_array = another_array.flat(Infinity) //infinity recurses till the maximum depth when we do not know how many arrays are inside each other
console.log(real_array)


console.log(Array.isArray("lmao")) //checks if the given data is an array 
console.log(Array.from("lmao")) //converts any data into an array

console.log(Array.from({name: "Hitesh"})) //this will return an empty array because we have not specified that on which we have to make an array key or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //what this does is takes elements and makes an array from them 