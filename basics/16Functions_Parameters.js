// function sayMyName(){
//     console.log("V");
//     console.log("I");
//     console.log("C");

// }
// sayMyName();  //if you just write: sayMyName the output will be blank, since it's just a reference
// output:
// V
// I
// C
function addThreeNumbers(num1, num2, num3){   //num1,num2 and num3 are parameters of the function addThreeNumbers

    console.log(num1+num2+num3);
}
//below are arguments inputs inside the paranthesis() of the function call
addThreeNumbers(3,4,6); //output: 13
addThreeNumbers(3,"4"); //output: 34undefined, since we haven't given any given any value for num3
addThreeNumbers(3,"4",6); //output: 346
addThreeNumbers(3,4,"6"); //output: 76
addThreeNumbers("9",4,9); //output: 949
addThreeNumbers("9",4,null); //output: 94null
addThreeNumbers(9,4,null); //output: 13

// addThreeNumbers(1,1,1);  //output: 3

//storing the output of the function in a variable:

// const result = addThreeNumbers(1,1,1);  //output: 3

// const result = addThreeNumbers(2,2,2);  //output: 6
// console.log("RESULT: ", result); //output: RESULT: undefined, check notes below on why this happens
//to fix the above above statement, check the below example:

function addThreeNumbers(num1, num2, num3){   //num1,num2 and num3 are parameters of the function addThreeNumbers

    let result = num1+num2+num3; //can also do this: return num1+num2+num3;
    // console.log("VIC")  //this will be printed, because it's before 'return' statement
    return result;
    // console.log("VIC") //this will not be printed, because it's after 'return' statement
}
//storing the output of the function in a variable:
const result = addThreeNumbers(23,4,6)
console.log("RESULT: ",result) //output: 33


//another example:
function userActivity(userName){
    if(userName === undefined){
        console.log("Please enter a username")  //can also use: return `Please enter a username`
        return;  //if you just write 'return' or don't put any 'return' statement inside the function then it will return 'undefined' by default at the end of the function execution
    }
    return `${userName} just logged in`
}
// userActivity("Victor"); //ouput: blank
console.log(userActivity("Victor")); //ouput: Victor just logged in

// //storing the return statement in const 'test' variable and printing it:
// const test = userActivity("Victor"); 
// console.log(test) //ouput: Victor just logged in

//interview questions:
//when empty string is passed as an argument:
console.log(userActivity("")); //ouput:  just logged in
//when nothing/no value is passed as an argument:
console.log(userActivity()); //ouput: undefined just logged in


//example:
// function userActivity(userName){
//     if(userName){ //here username=true and !userName = false, this if block will only execute if the parameter 'userName' is true

//         console.log("Please enter a username")  //can also use: return `Please enter a username`
//         return;  //if you just write 'return' or don't put any 'return' statement inside the function then it will return 'undefined' by default at the end of the function execution
//     }
//     return `${userName} just logged in`
// }

//putting default values, considering if no argument is passed:
function func1(studentName = "Ram"){
    if(!studentName){
        return console.log("Please enter student's name")
    }
    return `${studentName} just logged in`
    }

console.log(func1("VIC"))  //output: VIC just logged in, using assigned argument value
console.log(func1())    //output: Ram just logged in, using default values from function parameter