class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`User name is ${this.username}`);
    }
}
// const user1 = new User('vic')
// user1.logMe();  //output: User name is vic

// Create another class 'teacher' that inherits from  class 'User':
class teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    info(){
        console.log(`user name is ${this.username}, email is ${this.email} and password is ${this.password}`);
    }
}
// Create an instance of 'teacher' class:
const user2 = new teacher('ronnie','ggwp@gmail.com', 67789);
// ✅ Calling the 'info' method from the 'teacher' class:
user2.info(); //output: user name is ronnie, email is ggwp@gmail.com and password is 67789
// ✅ Calling the 'logMe' method from the inherited 'User' class:
user2.logMe(); //output: User name is ronnie(here we are accessing method 'logMe' from iherited class 'User')
// Creating an instance of the 'User' class :
const newUser = new User('kwick');
newUser.logMe(); //output: User name is kwick
// newUser.info(); //output: error, because The 'User' class does NOT have an 'info' method

console.log(user2 === newUser); //output: false
console.log(newUser === user2); //output: false
console.log(user2 instanceof teacher); //output: true
console.log(newUser instanceof User);  //output: true
