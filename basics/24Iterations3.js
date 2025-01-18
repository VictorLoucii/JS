// ["","",""] //array containing strings
// [{},{},{}] //array containing objects

//for of loop in an array:
const arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    // console.log(val)
}
//example:
const greetings = "Hello world!"
for (const val of greetings) {
    if (val == " ") { //CHECK NOTES BELOW
        continue;
    }
    else {
        console.log(`each char of greetings is ${val}`)  //note that 'space' will also be in the output
    }
}

//Maps:
//map is an object
const map = new Map();  //keep in mind to use () here not {}
map.set("Bihar", "India");
map.set("New Yor", "USA");
map.set("Tokyo", "Japan");
// console.log(map)

//implementing 'for of' loop in map:
for (const key of map) {
    console.log(key);
}
//output: s
// [ 'Bihar', 'India' ]
// [ 'New Yor', 'USA' ]
// [ 'Tokyo', 'Japan' ]
// will return an array of key value pairs, in seperate lines

//suppose we don't want array in the output:
for (const [key,value] of map) { //key = cities and value = countries
    console.log(key,':-',value);
}
//output:
// Bihar :- India
// New Yor :- USA
// Tokyo :- Japan

//using 'for of' loop in object:
// const myOjbect = {
//     game1: 'NFS',
//     game2: 'Elden Ring'
// }
// for (const key of myOjbect) {
//     console.log(key); 
//     //output: TypeError: myOjbect is not iterable, check notes below
// }
// for (const [key,value] of myOjbect){
//     console.log(key,":-",value);
//     //     //output: TypeError: myOjbect is not iterable, check notes below
// }

//how to iterate over objects using 'for in' loop:
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    // console.log(key);  //here output will be 'myObject' keys i.e js, cpp, rb and swift
    // console.log(myObject[key]); //here output will be key's value i.e javascript,c++ ect..
    //using string interpolation"
    // console.log(`${key} abbreviation is ${myObject[key]} `);
}

// using 'for in' loop for array:
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key);  //this gives the indexes of the array, check notes for output
    //to get the key's value we write:
    console.log(programming[key]); //output: will be key's values i.e js, r, py etc.
}
//note:the for...in loop is not applicable for Map objects in JavaScript

//for each loop is used in arrays: (check notes below)
//it's a high order function
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function(val){ //keep in mind in call back function doesn't have a name
    console.log(val);
})
//for each loop in arrow function i.e () => {}:
coding.forEach( (val) => { //note: there will be no function & function's name here before the arugment
    console.log(val);
})
//e.g of passing a function in a 'for each' loop:
const fighters = ["khabib", "makhachev", "john jones", "gsp", "mighty mouse"]
//function 'printMe' will be used in 'for each' loop
function printMe(val){
    console.log(val);
}
fighters.forEach(printMe); //output: khabib, makhachev..etc vertically one name per line, also not that we have to give the funcion 'printMe' reference here i.e don't use () which is used for calling the function
//exampe of using all 3 arguments of 'for each' loop:
fighters.forEach( (val, index, array) => {
    console.log(`Name: ${val}, index: ${index}, array: ${array}`);  //check notes below for the output
})
//e.g of using 'for each' loop in an array containing single/multiple objects:
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (val) => {
    // console.log(val.languageName);
    console.log(val.languageFileName, val.languageName);
//output:
// js javascript
// java java
// py python
})
