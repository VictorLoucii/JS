// What is the Rest Operator?
// The rest operator (...) allows you to collect all the remaining arguments passed to a function into a single array. It is useful when you don't know how many arguments will be passed to the function. for e.g:

// function userName(...num1){
//     return num1
// }
// console.log(userName(1,2,3))  //output: [1,2,3] ,o/p is returned in an array

//another e.g:
function userName(val1, va2, ...num1){  //check notes below on how does val1,val2 and num works in this function
    return num1
}
console.log(userName(1,2,3,4,5))  //output: [3,4,5], o/p is returned in an array

//another example:
//object created:
const userData ={
    Name: "Victor",
    Course: "Computer Science"
}
//function created:
function user(anyobject){ //parameter name can be anything just make sure it remains the same inside the function
    console.log(`User name is ${anyobject.Name} and his course is ${anyobject.Course}`)  //make sure that the object's properties names are correct otherwise the output will look like this: User name is undefined and his course is undefined
}
user(userData);  //calling the function 'user', output: User name is Victor and his course is Computer Science

//another way of calling the function by passing object as argument:
user({      //here object has been passed as an argument
    Name: "Jenny", 
    Course: "BCom"
    //output: User name is Jenny and his course is BCom
})

//arrays in function:
const newArray = [100,2,4,6];
function acceptArray(anyArray){
    return anyArray[3];
}
// console.log(acceptArray(newArray)); //output: 6

//calling the function 'accepArray' while passing an array as an argument:
console.log(acceptArray([100,2,4,90])); //output: 90