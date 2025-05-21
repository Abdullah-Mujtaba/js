const id = 12345
let email = "shakoor@gmail.com"
//var password = "123"
accCity = "Htown" //not preferred to declare variable like this 

let AccountState; //semicolon is optional but what java script will do is that set this as undefined as we have not assigned any value to it


accCity = "karachi"
email = "h1@h1.com"
//id = 12 not allowed

/*
    var is not used because it had scope issues. When one person changed something that was declared as var it changed everywhere to counter this we now use let everywhere
    and const is used to declare variables that we do not want to change
*/

console.table([id,email,accCity, AccountState])