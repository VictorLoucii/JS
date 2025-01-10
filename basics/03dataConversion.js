let sk = "33"
console.log(sk, typeof sk)
let sk1 = Number(sk)  //converting string to number, note that we have to use capital 'N' in number
console.log(sk1, typeof sk1)  //output: 33 number

let test1 = "33abc"
console.log(test1, typeof test1) //ouput: 33abc string
let test2 = Number(test1)
console.log(test2, typeof test2)  //converted successfully but the result will be NaN(meaning not a number), output: Nan number
  

let test3 = null
console.log(test3, typeof test3) //output: null object
let test4 = Number(test3)  //converting null to number, note that we have to use capital 'N' in number
console.log(test4, typeof test4) //converted successfully and null becomes '0' and it's type will be object output: 0 number

let test5 = undefined
console.log(test5, typeof test5) //output: undefined undefined
let test6 = Number(test5)  //converting undefined to number, note that we have to use capital 'N' in number
console.log(test6, typeof test6)    //converted successfully but the output will be NaN(not a number), output: Nan number

let test7 = true
console.log(test7, typeof test7) //output: true boolean
let test8 = Number(test7)  //converting boolean to number, note that we have to use capital 'N' in number
console.log(test8, typeof test6)    //converted successfully but the true in number becomes '1' output: 1 number

let isLoggedIn = 1
console.log(isLoggedIn, typeof isLoggedIn) //output: 1 number
let isloggedOut = Boolean(isLoggedIn) //use capital 'B' in boolean
console.log(isloggedOut, typeof isloggedOut) //output: true boolean

isLoggedIn = ""  //assigned empty string (no spaces between quotes)
console.log(isLoggedIn, typeof isLoggedIn)  //output:    string
isloggedOut = Boolean(isLoggedIn) //use capital 'B' in boolean
console.log(isloggedOut, typeof isloggedOut) //output: false boolean

isLoggedIn = "vic"  //assigned a string
console.log(isLoggedIn, typeof isLoggedIn)  //output:    string
isloggedOut = Boolean(isLoggedIn) //use capital 'B' in boolean
console.log(isloggedOut, typeof isloggedOut) //output: true boolean

/*
1,not empty string = true
0,'' = false
*/
