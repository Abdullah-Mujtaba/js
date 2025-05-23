//what to do if we want to filter somethign and return it in some variable

//with foreach loops we were unable to return something to counter that we use this


let myArray = [1,2,3,4,5,6,7,8,9]


//here we have not called the return because this is implicit return 
let filterArray = myArray.filter((num)=>(num > 4)) //now two ways of doing this 
console.log(filterArray) //what this did was filter the array on the basis of the condition

//same as foreach the filter has access to the array's index,elements, and the array itself takes 3 arguements
//to filter on same basis we pass a callback function to it, best benefit is that it helps us to return something 


//another way of doing the same thing, note that the above method was the arrow function

//the parameter inside the function are in this order (element, index, array) whichever we want to access
let filterArray1 = myArray.filter(function(item) {
    if(item < 5)
        {
            return item
        }
}) //this is another way of doing the same thing, note that we used {} so if the scope is open now we have to explicitly call return 

console.log(filterArray1)

//we can achieve this with foreach as well but for that we will have to create a new array
let sArray = []
myArray.forEach(function(item)
{
    if(item < 5)
        sArray.push(item)
})

console.log("this is foreach way", sArray) //this is how we do it with foreach 



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]; //an array which contains data about books imagine this is what our database has returned after running a query and now a user is filtering data 


historyBooks = books.filter(function(items)
{
    if(items.genre  == "History")
        {
            return items
        }
})

console.log(historyBooks)

books2000s = books.filter(function(items)
{
    if(items.publish >= 2000)
        {
            return items
        }
})

console.log(books2000s)

//practice of how we can use filter useful