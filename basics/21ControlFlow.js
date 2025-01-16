//if()
const temperature = 41

if ( temperature === 40 ){  ////keep in mind that the parameter 'condition' should be true in order for this if block to execute
    console.log("less than 50");
} else {
        console.log("temperature is greater than 50");
    }
// <, >, <=, >=, ==, !=, ===, !== //these can be used to check if the parameter of if() is true or false

//example:
const score = 200
if (score > 100) {
    let power = "fly"
    // var power = "fly"  //if we use 'var' then we can access power from outside the local scope
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);  //this will throw an error because 'power' is a local scope inside the if() block and it can't be accessed outside of it, only if it's been declared using 'var' then it can be accessed here

//e.g of implicit if() scope (usually done in one line and we don't use {}):
const price = 1000;
if(price>100) console.log("Price in range");

//more e.g:
const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// && is logical AND operator and || is logical OR operator
if (userLoggedIn && debitCard && 2==3) {  //this if() block will execute only if all the the three parameters are true
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {  //this if() block will execute if either of the parameter is true(i.e any of them is true)
    console.log("User logged in");
}

//switch case statement:
//syntax:
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3; //'month' is our key here and '3' is our case value
switch(month){ 
    case 1:
        console.log("January");
            break;  //suppose if you remove the 'break' statement from there then all the following cases will execute except the default 
    case 2:
        console.log("February");
            break;
    case 3:
        console.log("March");
            break;
    default:
        console.log("Default case executed");
        break;
    }

 //similar example:
const user_name = "rohit" //"user_name" is key here and 'rohit' is case value

switch (user_name) {
    case "jenny":
        console.log("1st user");
        break;
    case "febby":
        console.log("2nd user");
        break;
    case "rohit":
        console.log("3rd user");
        break;
    case "april":
        console.log("4th uuser");
        break;

    default:
        console.log("default case match");
        break;
}
//truth and falsy value concept:
const userEmail = "Vic" //since this is not an empty string(i.e ""), thus it will be considered true

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
//output: Got user email

//the following are considered falsy values:
// false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN(not a number)

//the following are considered truthy values:
// "0"(string containing 0), 'false'(string containing false), " ", [](empty array), {}(empty object), function(){} (this is empty function)

//how to check if array is empty:
const arr = [];
if(arr.length === 0){
    console.log("Array is empty");
}
//how to check if object is empty:
const obj1 = {};
if(Object.keys(obj1).length === 0){
    console.log("Ojbect is empty");
}

// general information:
console.log(false == 0);
output: true
console.log(false == "");
output: true
console.log(0 == "");
output: true

// Nullish Coalescing Operator (??): null undefined
//example:
let val1;  //declaration

val1 = 5 ?? 10 
console.log(val1);  //output: 5(takes the first value)

val1 = null ?? 10
console.log(val1);  //output: 10(preferred 10 more than null)

val1 = undefined ?? 15
console.log(val1);//output: 15(preferred 15 more than null)

val1 = null ?? 10 ?? 20
console.log(val1);//output: 10(ignoreds null and takes the second value i.e 10)

// Ternary Operator:
//syntax:
// condition/expression ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")