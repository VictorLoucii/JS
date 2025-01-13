//ojbect can be declared in two ways: literal and constructor()
//singleton
//object.create()

const mySymbol = Symbol("key1");  // Declaring a Symbol with the description 'key1'

//object literals:
const JsUser = {
    name: "Ramesh",
    "full name": "Ramesh Choudhary",
    [mySymbol]: "mykey1",  //if you wanna treat 'mySymbol' as a Symbol datatype use [] here
    mySymbol: "mykey1",   // Treat 'mySymbol' as a regular string key
    age: 18,
    location: "Jaipur",
    email: "ramesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email); // Using the dot (.) operator to access the value of the 'email' key in the JsUser object
console.log(JsUser["email"]) //this is a better practice, use [] brackets and "" inside it

// console.log(JsUser.mySymbol) //output: mykey1
// console.log(typeof(JsUser.mySymbol)) //output: string , which shouldn't be, check notes below, can be asked in interviews

console.log(JsUser[mySymbol]); // Correct way to access the Symbol property
console.log(typeof(JsUser[mySymbol])); // Output: "string" (type of the value)
console.log(typeof(mySymbol)); // Output: "symbol" (type of the key)

JsUser.email = "victor@chatgpt.com"  //over writing email's value
// Object.freeze(JsUser)  //the freeze() method will not allow any modifications to object 'JsUser'
JsUser.email = "victor@google.com"  //trying to over write email's value after freez() method
console.log(JsUser.email) //output: victor@chatgpt.com , no changes made because of freeze()

JsUser.greeting = function(){
    console.log("Hello, what's up?")
    return "function executed successfully!"
    //return //if you just write 'return' or don't put any 'return' statement inside the function then it will return 'undefined' by default at the end of the function execution
}

// console.log(JsUser.greeting)  //output: [Function (anonymous)] , check notes below 
// console.log(JsUser.greeting) //output: [Function (greeting)] , check notes below 

JsUser.greetingtwo = function(){
    //using string interpolation:
    console.log(`Hello, what's up?, ${this.name}, your age is ${this.age} and, your location is ${this.location}`)
    return "function two executed successfully!"
    //return //if you just write 'return' or don't put any 'return' statement inside the function then it will return 'undefined' by default at the end of the function execution
}
console.log(JsUser.greeting())  
console.log(JsUser.greetingtwo())  



