const num1 = 400
console.log(num1)

const num2 = new Number(400); //creates a Number object, which is a wrapper object around the number 400.
console.log(num2)// Output: [Number: 400] (Wrapper object for the number 400)

console.log(num2.toString())// Output: "400" (Converts the number to a string)
console.log(num2.length)// Output: undefined, check notes below

const num3 = 120.8667
console.log(num3.toFixed(2)) //output: 120.87, rounded off the point value
console.log(num3.toPrecision(3),num3.toPrecision(2)) //output: 121 1.2e+2 

const num4 = 100000000
console.log(num4.toLocaleString()) //output: 100,000,000 (by default it will give values according to us standard)
console.log(num4.toLocaleString('en-IN'))//output: 10,00,00,000 (output in indian standard)

//MATHS PART:
//also refere to this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math)  //output: Object [Math] {}
console.log(Math.abs(-4))  //output: 4 (abs will convert -ve values to +ve values)
console.log(Math.abs(-4.9),Math.abs(-4.1),Math.abs(4.3))  //output: 4.9 4.1 4.3
console.log(Math.round(-56.67),Math.round(-56.11))  //output: -57 -56
console.log(Math.floor(4.9),Math.floor(4.1))  //output: 4 4 
console.log(Math.ceil(4.9),Math.ceil(4.1))  //output: 5 5
console.log(Math.min(2,4,5,1))  //output: 1
console.log(Math.max(2,4,5,1))  //output: 5
console.log(Math.sqrt(2), Math.sqrt(81))  //output: 1.414 9
console.log(Math.pow(2,4))  //output: 16
console.log(Math.random())  //output: Returns a pseudo-random number between 0 and 1.
console.log((Math.random()*10) + 1)  //output: + 1 for getting non zero values as an output
console.log(Math.floor(Math.random()*10) + 1)  //output: rounding off to the smallest integer value

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min)











