const coding = ["js", "ruby", "java", "python", "cpp"]
//storing 'for each' arrow function in a variable:

const test = coding.forEach((item) => {
    console.log(item);  //if  you uncomment this: output will be undefined since forEach loop doesn't return anything
    return item;
})
// console.log(test);
//output:
// js
// ruby
// java
// python
// cpp
// undefined , this comes becuase 'for each' loop doesn't return anyting

//more e.g. using numbers:
const myNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// myNum1.filter( (num) => {num > 5}); //num>5 can be inside {} or without any brackets
// console.log(myNum1);
//output:
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
// ]
//notes: filter() method returns unlike 'for each' method
//storing the arrow function array in a variable:
const myNum2 = [100, 200, 3, 4, 5, 6, 7, 8, 9, 10]
const testing = myNum2.filter((num) => {
    return num > 5; //if you use {} with filter in arrow function then you need to use return statement, and if you don't use any brackets or you enclose in () then return statement is not required
})
// can also write the above statements this way(all will have the same output):
// const testing = myNum2.filter( (num) => num>5); //if you don't use any brackets or you enclose in () then return statement is not required
//const testing = myNum2.filter( (num) => (num>5); //if you don't use any brackets or you enclose in () then return statement is not required

console.log(testing);
//output:
// [
//     100, 200,  6, 7,
//       8,   9, 10
// ]

//suppose i wanna do the same above opearation using 'for each' method:
const arr1 = [1, 2, 3, 4, 56];
const newArr = []; //declaring an empty array where we will store the result
arr1.forEach((val) => {
    if (val > 3) {
        newArr.push(val);
    }
})
// console.log(newArr); //output: [ 4,56 ]

//example of an array containing multiple objects and using filter() method on it:
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
const searchBook1 = books.filter((b) => b.genre === "History"); 
console.log(searchBook1);

const searchBook2 = books.filter((b) => b.publish >= 2000);
console.log(searchBook2);

// let searchBook2 = books.filter((b) => { b.publish >= 2000 });
// console.log(searchBook2);  //output: [] (an empty array), because we din't use return statement when using {} in a arrow function with filter method

const searchBook3 = books.filter( (val) => {
    return val.publish >= 1995 && val.genre === "History";
})
console.log(searchBook3)

//using map, array and arrow function all together:
const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const storeNewNums = newNums.map( (val) => 10 + val )
console.log(storeNewNums);


//e.g of chaining maps:
const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n2 = 
    n1.map((num)=> num * 10)  //here at start num is 1*10 = 10 for first element, before chaining
    .map((num) => num +5)   //here num is 15(10+5) for first element, after chaining, this will become the output elements of the array
console.log(n2)   //after the second chain is executed the output will be displayed
//output:
// [
//     15, 25, 35, 45,  55,
//     65, 75, 85, 95, 105
// ]
//more e.g of chaining maps:
const m1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const m2 = 
    m1.map((num)=> num * 10)  //here at start num is 1*10 = 10, before chaining
    .map((num) => num +5) //here num is 15(10+5) for 1st element, after chaining,
    .filter( (num) => {
        return num<40;  //now only num who are less than 40 will be displayed in the output array
    })
console.log(m2); //output: [ 15, 25, 35 ]

//Array.prototype.reduce() :

const array1 = [1, 2, 3, 4];
const initialVal = 0; //keep in mind that at start accumulator = initialVal, check notes below
//storing in a variable 'array2' and using arrow function
const array2 = array1.reduce((accumulator,currentValue) => accumulator+currentValue,initialVal); //here we passed an arrow function inside the .reduce() method

// const array2 = array1.reduce((accumulator,currentValue) => accumulator+currentValue, 0); //substitue for the above statement, in this case you don't need to declare a variable for initial value for accumulator, here initial value will be 0 or whatever we assign

console.log(array2); //output: 10, check notes below for better uderstanding

//same above example but now using regular function with reduce() method:
const array3 = array1.reduce(function(accumulator,currentValue) {  //keep in mind there is no '=' sign here
    console.log(`Accumulator: ${accumulator}, current value: ${currentValue} and output: ${accumulator+currentValue}`)
    return accumulator+currentValue;
},0);  //here 0 will be considered initial value
console.log(array3)  
//output: 
// Accumulator: 0, current value: 1 and output: 1 ,note the output here becomes the accumulator's value in the next iteration
// Accumulator: 1, current value: 2 and output: 3
// Accumulator: 3, current value: 3 and output: 6
// Accumulator: 6, current value: 4 and output: 10
// 10  ,lastly it prints the total 

//example of using reduce() method in array with objects:
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalPrice = shoppingCart.reduce((accumulator,item) => {
    return item.price + accumulator;
},0)  //'0' is assigned initial value
console.log(totalPrice); //output: 22996

const totalItems = shoppingCart.reduce((acc,item) => {
    return acc + 1;  //note: return acc++; this statement is wrong because the post-increment operator (++) returns the value before incrementing it. This means acc remains unchanged during the operation
    // return ++acc; //this will work(pre-increment operator), you can use this or acc+1
},0)
console.log(totalItems);
//output: 4