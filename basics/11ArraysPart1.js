//arrays are non primitives,JavaScript arrays are resizable and can contain a mix of different data types, JavaScript arrays are zero-indexed,JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies), we use square brackets for arrays i.e []


//for more info on array check : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [0, 1, 2, 3, 4, 5]  //declaration of an array 'myArr', original array
const heroes = ["shaktiman", "naagraj"]  //array with string data type,original array
console.log(myArr[3], heroes[1])

const newArr = new Array(66,7,88,5)  //original array
console.log(newArr)

//Array methods:
newArr.push(100)

console.log(newArr)
console.log(newArr.push(200)) //this statement will return the length of the array 'newArr' after inserting the Number 200 i.e 6 ([ 66, 7, 88, 5, 100, 200 ])
console.log(newArr)

console.log(newArr.pop())   //this will return the value which is getting popped i.e the last element in the array
myArr.pop() //pop() method in array removes the last element in the array
console.log(newArr)

newArr.unshift(9)  //unshift() method adds specific value at the start/0th index of the array
console.log(newArr)

newArr.shift() //shift() method removes the 0th index of the array, it requires no argument
console.log(newArr)

console.log(newArr.includes(9))  //checks if there is '9' Number in the array
console.log(newArr.indexOf(9))  //checks the index of Number '9' if it's not present in the array it will return -1
console.log(newArr.indexOf(5))  //checks the index of Number '5' and returns it

const test1 = new Array(23,4,55,7,78)
console.log(test1) //output: [ 23, 4, 55, 7, 78 ]
const secondArray = test1.join()    // the .join() method converted the array 'test1' to a string data type
console.log(secondArray) //output: 23,4,55,7,78 , here output is string now

//IMPORTANT slice and splice operations on an array:

const test2 = new Array(11,22,33,55,66)  //ORIGINAL ARRAY
console.log("Original Array",test2)  //output: Original Array [ 11, 22, 33, 55, 66 ]

const test3 = test2.slice(1,3)  //start from 1 and end at 2(3-1) index of the array'test2'
console.log("B", test3)  //output: B [ 22, 33 ]
console.log("Original Array",test2) //output: Original Array [ 11, 22, 33, 55, 66 ]

const test4 = test2.splice(1,3)
console.log("C",test4)  //output: C [ 22, 33, 55 ]
console.log("Original Array",test2)   //output: Original Array [ 11, 66 ]
