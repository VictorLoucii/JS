// constructors have been added after ES6
//e.g of using constructor:
class User1 {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){ //function inside a constuctor
        return `${this.password}abc`
    }
    changeUsername(){  //function inside a constructor
        return `${this.username.toUpperCase()}`
    }

}
const vic = new User1("victor", "vic@gmail.com", "987")  //
console.log(vic.encryptPassword());
console.log(vic.changeUsername());
//output:
// 987abc
// VICTOR

// suppose we do similar to above program without constructors but with the help of functions:
// Constructor function 'User2' to create user objects with username, email, and password
function User2(username, email, password){  
    this.username = username;
    this.email = email;
    this.password = password
}
//injecting a specific method 'encryptPassword' into the function 'User2':
User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
//injecting a specific method 'changeUsername' into the function 'User2':
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User2("ron", "ron@gmail.com", "123") //Creating a new user object using the 'new' keyword  
// Calling the prototype methods on the 'tea' object 
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
//output:
// 123abc
// RON