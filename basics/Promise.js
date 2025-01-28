const promiseOne = new Promise(function (resolve, reject) { // this is a promise constructor and it takes a function as parameter with two parameters 'resolve', and 'reject
    setTimeout(function () {
        console.log("Async task completed");
        resolve();  //we need to write this statement in order for below promiseOne.then(function() console.log statement to run because then is directly connected to resolve()
    }, 1000)
});
//consuming promise:
promiseOne.then(function () {  //then is directly connected with resolve
    console.log("Promise consumed")
})

//another way of doing above program:
new Promise(function(resolve, reject){ // this is a promise constructor and it takes a function as parameter with two parameters 'resolve', and 'reject
    setTimeout(function () {
        console.log("Async task2 completed");
        resolve();
    }, 2000);
}).then(function(){
    console.log("Async 2 resolved");
})

//another way of doing promise program:
const promiseThree = new Promise(function(resolve,reject){
    console.log("Third promise called");
    resolve({username:'victor',id:2300});  //objects passed as arguments in resolve()

})
promiseThree.then(function(user){
    console.log(user);
})

//example of doing promise program with reject() and catch() for catching errors:
const promiseFourth = new Promise(function(resolve,reject){
    console.log("Fourth promise called");
    let error = true;
    if(!error){  //this if() block will execute if 'error = false'
        resolve({userName:"Vic",id:2203});
    }
    else{   //this if() block will execute if 'error = true'
        reject("Error: something bad happened"); //this(error) will be sent to the catch() method
    }

}).then(function(userData){
    console.log(userData)
})
.catch(function(err){
    console.log(err);
});

//e.g of chaining 'finally()', catch() and .then()' to access properties of objects passed as agruments in resolve():
const promiseFive = new Promise(function(resolve,reject){
    console.log("Promise 5 called");
    let t = true;
    if(!t){  //if t is false then this block executes
        resolve({username: "victor", email: "ggwp.example.com"});
    }
    else{  //if t is true then this block executes
        reject("Error occured: something went wrong");
    }
})  //using arrow functions below, ‘.then()’ method is directly connected to ‘resolve()’
.then((userData) => { //in this '.then()' we are returning specific object property
    console.log(userData);
    return userData.username; //this will return username property(victor) from the object to the next .then()
})
.then((username) => {
    console.log(username);
})
.catch((err) => { //it is a good practice to keep the catch() block at the last or the second last poistion of the chain
    console.log(err);
})
.finally(() =>{ //finally() block gets executed no matter what the conditions are
    console.log("This is the final statement");
});

//e.g using asyn() function instead of .then():
//do note that asyn() method doesn't catch the errors gracefully, if you want to handle errors in the 'async' function you have to implement try-catch block in it
const promiseSix = new Promise((resolve, reject) => {  //here we used an arrow function to declare a promise function
    setTimeout(() => {
        console.log('promise six called');
        let err = false;
        if (!err) { //if err=flase then only this block executes
            resolve({ TeamName: "FCB", Player: "Messi" });
        }
        else {  //if err=true then only this block executes
            reject("Error occured");
        }

    }, 2000)
})
async function consumePromiseSix() {
    console.log("Async funtion called");
    try {
        const response = await promiseSix;  //here we wait for the result of promiseSix using ‘await’ keyword and store it in a variable 'response'
        console.log(response);
        console.log(response.Player);
        console.log(response.TeamName);
    }
    catch (error) {
        console.log(error);
    }
}
consumePromiseSix();  //call the aysnc function
//output: 
// Async funtion called
// promise six called
// { TeamName: 'FCB', Player: 'Messi' }
// Messi
// FCB
