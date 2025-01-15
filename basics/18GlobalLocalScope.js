//var c = 300
// let a = 300  //global variable
// if (true) {
//     let a = 10  //local variable
//     const b = 20
//     // console.log("INNER: ", a); //output: INNER: 10
// }
// console.log(a)  //output: 300

function one(){ //here 'one' is the parent function
    let user_name = "Victor";  //parent function variable
//note: the child function can access the variables of the parent function but the parent can't do vice versa    
    function two(){ //here 'two' is the child function
        let website = "google.com";  //child function variable
        console.log(user_name);
    }
    // console.log(website);  //this will throw a ReferenceError, because website is defined inside the inner function 'two'
    two(); //calling the function 'two'
}
one();

//same like above example using if-else:
//note: the child if condition can access the variables of the parent if condition but the parent can't do vice versa 
if(true){ //parent if
    let user_name = "Victor";
    if(true){  //child if
        let website = "google.com";
        console.log(user_name+website);
    }
    //console.log(website);  //this will throw ReferenceError
}

//INTERESTING CONCEPT:
//Function can be declared in two ways:
//1st way of declaring function:
//console.log(addone(5))  //this will not throw an error 
function addone(num){
    return num + 1
}
console.log(addone(5))  //output: 6 , keep in mind that this statement can be above the function block or below, it will still execute


//second way of declaring function, this can be called an expression as well as we are holding the value of the function in a variable:
//console.log(addTwo(5));  //if we call it before the function 'addTwo' block, this will throw an error
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))  //output: 7, keep in mind this statement has to be declared after the funcion block, as this is an expression where we are holding the value of the function in a variable