let myArray = [1,2,3,4]


let modifiedArray = myArray.filter(function(items)
{
    if(items > 2)
        {
            items = items + 1 //this wont work as we are modifying values in this that cannot happen with filter
            return items
        }
}) //filter is used for only manipulating data based on conditions
console.log(modifiedArray)



let m2Array = myArray.map((items)=> (items+1)) //map runs something on all elements eg if we want to add something to every number
console.log(m2Array)


///now we look at chaining multiple methods
//m2, m3 = modified2, modified3


//the second method after first one uses data that the first method returned
//.map().map(), here the second map will use the data that was returned by the first map and use that to handle its logic
let m3Array = myArray.map((items)=>(items+2)).map((items)=>(items*2)).filter((items)=>(items > 2)) //this is how chaining is done
console.log(m3Array)
//what i did was use {} and did not call return which is not supposed to happen like that 

