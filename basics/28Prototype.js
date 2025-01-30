//in js non primitive data type(aof) are objects where as primitive data types(nnssbbu) are not objects but they can behave like objects because js automatically wraps them in object wrappers when needed.
Example:
const num = 42;  //prmitive data type
console.log(num.toString()); // Works because JS wraps `num` in a Number object

const str = "hello"; //primitive data type
console.log(str.toUpperCase()); // Works because JS wraps `str` in a String object

//JavaScript treats primitives like objects when needed, but they are not actual objects.

//Functions are objects in JavaScript and can store properties like an object.
Example:
function greet() {
  console.log("Hello!");
}

// Adding a property to the function

greet.language = "English";

console.log(greet.language); // English
greet(); // Hello!

greet() behaves like a function when you call it.
greet.language behaves like an object property, which is not possible in most other languages.
In JavaScript, functions are special objects that can also be executed.

//Most objects inherit from Object.prototype.
However, the final prototype in the chain (Object.prototype.__proto__) is indeed null.
example:
const obj = {};  
console.log(Object.getPrototypeOf(obj)); //output: Object.prototype
console.log(Object.getPrototypeOf(Object.prototype)); // output: null

The ultimate prototype (top-level) is null, but most objects have a prototype before reaching null.
//e.g:
function createUser(username, price) {
    this.username = username;
    this.price = price;
}

// Adding methods to the prototype
createUser.prototype.increment = function() {
    this.price++;
};

createUser.prototype.display = function() {
    console.log(`username: ${this.username}, price: ${this.price}`);
};

// Creating instances using 'new'
const one = new createUser('toyota', 2000);
const two = new createUser('bmw', 200);

// Calling display() function
one.display(); // Output: username: toyota, price: 2000
two.display(); // Output: username: bmw, price: 200

//important e.g: (also check 7hrs 42 mins for visual explanation)

// Created an array
let myHeros = ["thor", "spiderman"]  

// Created an object
let heroPower = {  
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){  // getSpiderPower is a method of 'heroPower' object
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Injecting a custom method into all objects (including arrays, objects, functions, etc.)
Object.prototype.forAll = function(){
    console.log('forAll is present in all objects');
}

// Since 'heroPower' is an object, it can access 'forAll()' method from Object.prototype
heroPower.forAll();

// Since arrays also inherit from Object.prototype, 'myHeros' (array) can access 'forAll()' method too.
myHeros.forAll();

// Now injecting a custom method ‘inArray’ specifically into arrays:
Array.prototype.inArray = function(){
    console.log("This is inside array");
}

// Calling the method added to the Array prototype
myHeros.inArray(); // Works because 'myHeros' is an array

// heroPower.inArray(); 
// ❌ This will throw an error because 'inArray()' exists only in Array.prototype, not Object.prototype.

//another e.g of injecting custom method using prototype:

let anotherUsername = "wind     "
// injecting a custom method 'truelength' specifically into strings:
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"victor".trueLength() // Works because 'victor' is a string
"bananaShake".trueLength()  // Works because 'bananaShake' is a string
//output:
// wind     
// True length is: 4
// victor
// True length is: 6
// bananaShake
// True length is: 11

// inheritance e.g:

// Creating a base object 'User' with common properties
const User = {
    name: "natty",
    email: "natty@google.com"
}

// Creating another object 'Teacher' with a specific property
const Teacher = {
    makeVideo: true
}

// Creating another object 'TeachingSupport' with its own property
const TeachingSupport = {
    isAvailable: false
}

// Creating 'TASupport' object and linking its prototype to 'TeachingSupport'
// This means 'TASupport' can access properties of 'TeachingSupport'
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // Older way of setting prototype
}
// Setting 'User' as the prototype of 'Teacher'
// This means 'Teacher' can now access 'User' properties (like name, email)
Teacher.__proto__ = User 
console.log(Teacher.name, Teacher.email); //output: natty natty@google.com

// Modern syntax for setting prototype: 
// Making 'Teacher' the prototype of 'TeachingSupport'
// Now 'TeachingSupport' can access 'Teacher' properties (like makeVideo)
Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(TASupport.makeAssignment); // JS assignment (own property)  //check notes below for better understanding
console.log(TASupport.isAvailable); // false (from TeachingSupport)
console.log(TASupport.makeVideo); // true (from Teacher)
console.log(TASupport.name); // natty (from User)
console.log(TASupport.email); // natty@google.com (from User)