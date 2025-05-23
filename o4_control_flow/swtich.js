//switch is another way to do our conditional checks faster and reduce writing if else again and again


//we can also pass a string in the switch case as well and compare it with a string
//not we should compare similar datatypes

let number = 50

switch (number) {
    case 20:
        console.log("the number is 20")
        break;

    case 30:
        console.log("the number is 30")
        break;

    case 40:
        console.log("the number is 40")
        break;
    
    case 50:
        console.log("the number is 50")
        break;

    case 60:
        console.log("the number is 60")
        break;

    default:
        console.log("none of these match")
        break;
}

//if we remove break from one of the cases what happens is that it will run that case and the case below untill it finds one that has a break below it