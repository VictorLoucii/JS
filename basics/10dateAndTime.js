// let myDate = new Date(); // A Date object named 'myDate' is created using the new keyword, representing the current date and time.
// console.log(typeof myDate)  //output: object
// console.log(myDate) //output: 2025-01-12T07:00:20.557Z
// console.log(myDate.toString()) //output: Sun Jan 12 2025 06:56:49 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString()) //output: 2025-01-12T06:56:49.858Z
// console.log(myDate.toJSON()) //output: 2025-01-12T06:56:49.858Z
// console.log(myDate.toDateString()) //output: Sun Jan 12 2025  
// console.log(myDate.toLocaleDateString()) //output: 1/12/2025
// console.log(myDate.toString()) //output: Sun Jan 12 2025 06:56:49 GMT+0000 (Coordinated Universal Time)

// let createdNewDate = new Date(2023,0,15) //2023 is the year, 0 is 1st month i.e jan, and 15th is the date
// console.log(createdNewDate.toDateString())

let anotherDate = new Date(2023,0,15,7,3) //2023 is the year, 0 is 1st month i.e jan, and 15th is the date, 7 is the hour and 3 is the minute
console.log(anotherDate.toLocaleString()) //output: 1/15/2023, 7:03:00 AM

anotherDate = new Date("2023-02-17") //2023 is the year, 0 is 2nd month, and 17th is the date,
console.log(anotherDate.toLocaleString())  //output: 2/17/2023, 12:00:00 AM, the 12:00:00 AM in the output is the default time value for a Date object when only a date is specified without a time

anotherDate = new Date("01-09-2023") //2023 is the year, 9th month, and 01 is the date,
console.log(anotherDate.toLocaleString())  //output: 2/17/2023, 12:00:00 AM

//using time stamp:
let myTimeStamp = Date.now()
console.log(myTimeStamp)  //output: 1736667253584 ,  the output of Date.now() is the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC (the Unix epoch). This is often referred to as a timestamp.
console.log(anotherDate.getTime())  //output: 1673222400000, .getTime() method in JavaScript  it calculates the number of milliseconds between January 1, 1970, 00:00:00 UTC and January 9, 2023, 00:00:00 UTC.

//converting the miliseconds from the Date.now() function to seconds by dividing it by 1000
console.log(myTimeStamp/1000)  //output: 1736667762.198
//now removing the point digits by using Math.floor() function:
console.log(Math.floor(myTimeStamp/100))  //output: 17366677621  (rounded off and removed point value)

let todayDate = new Date()
console.log(todayDate)
console.log(todayDate.getTime())
console.log(todayDate.getMonth())
console.log(todayDate.getDay())
console.log(todayDate.getHours())
console.log(todayDate.getHours()+10)

//using Date in string interpolation:
console.log(`Today's date is ${todayDate.getDate()} and month is ${todayDate.getMonth()+1}`)

//important example of toLocaleString() method:
const testDay = new Date();
console.log(testDay.toLocaleString('default', {
    weekday: "long",
}));











