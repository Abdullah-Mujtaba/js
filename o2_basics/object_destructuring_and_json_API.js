const user = {
    name: "me",
    email: "me@gmail.com",
    age : 18
}

//now what we can do is always do this user.name everytime we want to print it but that can get tedious so another way of doing that is saving it in a variable

const {email} = user  //nnow the email has the email value that was associated with the user


console.log(email)

const {email: user_email} = user  //now what happens is that the variable email has stored the user's email

console.log(user_email)