console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)


console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)
// we get false for all of them usually we avoid these type of data comparisions 

//note that when using operators such as comparitors >, <, >=, <= what they do is convert null to its value which is zero 
//but when we use equals to that does not convert null to its value  that is why we see different results 
// === what this does is this strict checking this wont convert the data types if there is a mismatch 

console.log("2" === 2) // as we can see we get false for this due to the data type mismatch

