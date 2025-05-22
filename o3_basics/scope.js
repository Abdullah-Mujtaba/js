var c = 30 //var does not follow the scope laws that we can modify this here and in a if statements scope or a functions scope
//which is something we do not want
//that is why we avoid using var

if(true)
    {
        let a = 10
        const b = 20
        var c = 20
    }


// console.log(a)
// console.log(b)
console.log(c) 
