//Object literal is basically an object created using {} with properties and methods. 
//e.g of object literal:
const user = { 
    userName: "victor",
    id: 13427,
    college: 'hansraj',

    user_details: function(){
        console.log("Got the user details")
        // console.log(`user name: ${userName}`); //output: reference error, to correct it use 'this'
        console.log(`user name: ${this.userName}`); // output: victor, correct way to get userName value
        console.log(this); //output: whole object 'user' 
    }
}
console.log(user.userName, user.id);
console.log(user.user_details());
console.log(this) //output: {} i.e empty object


//constructor function:
// The 'new' keyword is used with a constructor function or class to create multiple instances of an object.  
//what is an instance? An instance is an object that is created using a constructor function or a class, and it typically contains the properties and methods defined in that constructor or class.
//e.g:
//create a function
function userInfo(name, occupation, salary){
    this.name = name;
    this.occupation = occupation;
    this.salary = salary;
    // console.log(this); //check notes below for the output  
    //method created using 'this':
    this.greeting = function(){
        console.log(`welcome ${this.name}`);
    }
}
//suppose if we don't use the 'new' keyword and make multiple instances of an object the the latest object will over ride previous object's value
//first instance:
const user1 = new userInfo('victor', 'programmer', 80000);  //using 'new' keyword here, this won't let the newly created instance of an object to overrider previous object's value
console.log(user1); 
const user2 = new userInfo('ken', 'student', 90000);   //second instance of the object
console.log(user2);