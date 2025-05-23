//IIFE = (immediately invoked function execution)


//imagine you have an application and there is a function that connects your app to your database we would want that the function runs immediately without any delay so we use IIFE
//another use case is that sometimes variables or functions can get polluted because of the global scope to prevent this pollution we use IIFE


//syntax
(function hello()
{
    console.log("hello")
})(); //this is how we declare IIFE, the semicolon ends the function there 

//note that we have to add a semicolon after we are done with our IIFE, at the end of the invoking parenthesis that is because that node has no clue where to end the context


//declaring an arrow function


(() => {
    console.log("DB is connected") //this is how we can write arrow functions 
})();


((name) => {
    console.log(`${name} hello how are you`)
})("max"); //this is how we can pass parameters, in the ending() just pass argumenets and to define parenthesis we can do that in the () second parenthesis that are with function

