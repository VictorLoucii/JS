//  Primitive datatypes:

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');        // Creates a unique Symbol
const anotherId = Symbol('123'); // Creates another unique Symbol

console.log(id === anotherId);   // false, because each Symbol is unique


// const bigNumber = 3456543576654356754n   //here 'n' at the last converts this number into BigInt type



// Reference (Non primitive datatypes):

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];   //created a constant object 'heroes' containing an array of strings
let myObj = {       //created a variable object containing dictionary
    name: "hitesh",
    age: 22,
}

const myFunction = function(){  //created a function
    console.log("Hello world");
}

console.log(typeof anotherId);

// for more info on type of operators check the below link:
// https://262.ecma-international.org/5.1/#sec-11.4.3