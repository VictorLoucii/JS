const user = {
    username: "Rocky",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this); //check notes below for the output
    }

}
user.welcomeMessage();  //output: Rocky , welcome to website
user.username = "Balboa"; //changed the username to 'Balboa'
user.welcomeMessage();  //output: Balboa , welcome to website
console.log(this) //output: {} (an emtpy object)

//interesting concept:
const test = function () {
    let user_name = "vic"
    // console.log(this); //here the output will of many values global, fetch,performance etc..
    console.log(this.user_name); //output: undefined
}
test()

//declaring functions using arrow => :
const test2 = () =>{
    let user_name = "vic";
    console.log(user_name);
    console.log(this); //output: {}
}
test2()

//more about arrow function:
//syntax: () => {}
//explicit arrow function(when we use {}curly brackets):
//storing it in a variable:
const func1 = (num1,num2) => {
    return num1+num2;
}
console.log(func1(4,5)); //output: 9

//declaring arrow function by implicit return(when we don't use {}brackets):
const func2 = (num1,num2) => num1+num2; //here we remove the {} and the return statement
console.log(func2(6,5)); //output: 11
//can also declare arrow funtion this way:
const func3 = (num1,num2) => (num1+num2); //here we use () around num+num2, don't need return
console.log(func3(9,5)); //output: 14
//note: when we use curly brackets{} we need to use return, but when we are using () we don't use return statement, this will be useful knowledge for react

//we use ()paranthesis so that we can use objects properly in arrow function:
//object:
const fakeUser = {
    username: "Rocky",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this); //check notes below for the output
    }
}
const addingNumbers = (num1,num2) => ({username:"Marco"}) //use paranthesis here to return object's values
console.log(addingNumbers())  //output: { username: 'Marco' }

//using arrow function in loops:
const myArray = [1,3,4,5,6];
myArray.foreach(() => {}) //one way
// myArray.foreach(() => ()) //another way

