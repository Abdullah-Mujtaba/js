const webUser = {}
webUser.loggedIn = false
webUser.id = "123abc"
webUser.email = "user1@gmail.com"

console.log(webUser)
 
const webUser1 = { //this is how we create nested objects in js
    username: {
        userfullname: 
        {
            firstname: "me",
            lastname: "i smort"
        }
    }
}

console.log(webUser1.username?.userfullname.firstname) //this is how we access nested objects 
//the question mark just checks whether the field exists or not so this is just a check that we can add before doing anything 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2} //this creates an object with key obj1 and the values are the ones that obj1 had and same with the second parameter
console.log(obj3)

//to create an object with key values from 3 objects we do this

const obj4 = {...obj1, ...obj2}
console.log("obj4", obj4) //also note when the object only contains numbers as its keys use square brackets on the safe side just always use brackets 

//another way of doing the same thing is 
const obj5 = Object.assign({},obj1,obj2) //first parameter is the target where all the things will be stored  
console.log("obj5", obj5)


const users = [{name: "me", id:1}, {name: "you", id:2}]
console.log(users[0].name)

console.log(Object.keys(webUser)) //gives all the keys/attributes that an object has 
console.log(Object.values(webUser)) //gives all the valeus that an object has
console.log(Object.entries(webUser)) //turns the key values into small arrays and puts them in a big array 
console.log(webUser.hasOwnProperty("loggedIn")) //tells if an object has the attribute that we passed just a safety check to avoid crashses 