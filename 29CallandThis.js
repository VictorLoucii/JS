// Function to set the username (simulating a complex database operation)
function SetUsername(username) {
    this.username = username;
    console.log("called"); // Logs when the function is executed
}

// Function to create a user object
function createUser(username, email, password) {
    // Calling SetUsername function inside createUser using 'call'
    // 'call(this, username)' ensures 'this' refers to the new object being created
    SetUsername.call(this, username); 
    
    this.email = email;
    this.password = password;
}

// Creating a new user object using 'new' keyword, new creates and returns an object by default.
const func1 = new createUser("alex", "helpline.com", "89976");

// Logging the created object
console.log(func1); 


