//normal function execution example:
function test1(){
    console.log("Welcome")
}
test1(); //output: Welcome, do note to put semicolon ';' here after the (), then only the following iffe functions will execute

//executing the above function using IIFE:
(function test2(){  //this is a name IIFE because it is named 'test2'
    console.log("Welcome")
}) 
(); //output: Welcome , we just wrapped the function 'test2' with (), ALSO do note to put semicolon ';' here after the (), then only the following iffe functions will execute

//using iife in arrow functions:
(() => {  //this is a simple or unnamed IFFE since no named has been assigned here
    console.log("what's up?")
}) ();  //output: what's up?

//PASSING variables in above iife arrow function:
((name) => {
    console.log(`what's up? ${name}`) //usihng string interpolation here
}) ("VICTOR")   //passed 'VICTOR' as a name argument
//output: what's up? VICTOR