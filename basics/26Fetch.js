
//e.g using asyn() function instead of .then(): 
//do note that asyn() method doesn't catch errors gracefully, if you want to handle errors in the 'async' function you have to implement try-catch block in it
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
async function consumePromiseSix() { //note that this aysnc function is before the fetch() api, but it’s output will be displayed after the output of fect() api, check notes below
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

//e.g  using fetch() api with .then() and catch(): (also note that here fetch() api is below the asyn function but it’s output will be displayed first), check notes below
//this method is shorter and doesn’t require ‘await’ keyword

fetch('https://api.github.com/users/VictorLoucii')  //note: don't put colon i.e ';' here
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    console.log(data.login);
    console.log(data.id);
})
.catch((err) => {
    console.log("Error: ",err);
})

//e.g of fetch() api using try and catch in async function:
// async function detail(){
//     try{
//         const response = await fetch('https://api.github.com/users/VictorLoucii')
//         // console.log(response);
//         // console.log(typeof(response));  //output: object i.e {}
//         //convert 'response' to json() and store it in a varible:
//         const data = await response.json();  //check notes below on why we used it 
//         console.log(data);
//         console.log(typeof(data));  //outpu: object i.e {}
//     }
//     catch(err){
//         console.log('error: ',err);
//     }
// } 
// detail();
