//stack saves primitives 




//*here they both are stack variables evenw hen i change name after i assgined it to the nName the change didnt occur to nName because i got the copy of name not the original one  */
let name = "john"
let nName = name
name = "cena"

console.log(name)
console.log(nName)



//***********this is what heap memory is that both of them are referncing to the same data so 
// change in one would change the values for the other as well as the original data was being changed */
let user1 = 
{
    name:"max",
    email: "max@gmail.com"
}

let user2 = user1

user2.name = "kane"

console.log(user1.name)
console.log(user2.name)
 