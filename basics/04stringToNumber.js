let a = 33
console.log(a, typeof a)
let b = String(a)  //note 'S' is capital here
console.log(b, typeof b)

let c = 55
let d = -c
console.log(d, typeof d)

//some basic math operations:
// console.log(2+2)    //putting semi colong (;) is optional
// console.log(2-2)
// console.log(2**2); //denotes 2 raise to 2 for 2 raise to power 3 we use : 2**3
// console.log(2/2);    //here the output is quotient(point values are excluded)
// console.log(2%2);   //here the output is the remainder

// str1 = "hello"
// str2 = " Victor"
// str3 = str1 + str2
// console.log(str3, typeof str3) //output: hello Victor string

console.log("1"+2)  //output: 12
console.log(1+"2")  //output: 12

// If the first operand is a string, JavaScript performs string concatenation.
// All subsequent operands are coerced into strings.
console.log("1" + 2 + 2);  // Output: "122"

// If the first operands are numbers, JavaScript performs numeric addition
// until it encounters a string, after which it switches to string concatenation.
console.log(1 + 2 + "2");  // Output: "32"

console.log(true)   //output: true
console.log(+true) //output: 1
console.log(+"") //output: 0 
// console.log(true+) //output: will give an error

let num1, num2, num3, num4 
num1 = num2 = num3 = num4 = 2+2
console.table([num1,num2,num3,num4])

//what are prefix and postfix increment?

//below are examples of prefix increment:
let u = 3;
const v = ++u;
console.log(u,v)
//output: u is 4; v is 4

let u2 = 3n;
const v2 = ++u2;
console.log(u2,v2) 
//output: u2 is 4n; v2 is 4n


//below are examples postfix increment:
let x = 3;
const y = x++;
console.log(x,y)

let x2 = 3n;
const y2 = x2++;
console.log(x2,y2)

// link to study for conversion:
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// link to study for prefix and postfix:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment





