//Destructing Ojbects:
const course ={
    subject: "JavaScript",
    teacher: "Hitesh",
    price: "999"
}
console.log(course.price); //output: 999

// const {price} = course;  //object property/key inside {} and object name after the '=' sign
// console.log(price) //output: 999
const {price: money} = course;  //use colon ':' to rename price property of object 'course' to 'money'
console.log(money) //output: 999

// //destructuring objects in react, which we will study later on:
// const navbar = ({company}) => {

// }
// navbar (company = "Victor")

//below is an example of json in object formatt:
// {
//     "name": "josh",  //note that here the properties are also in double quotes i.e name,price, and coursename
//     "coursename": "javascript",
//     "price": "1BillionUSD"
// }

//below is an example of json in array formatt:
// [
//     {},
//     {},
//     {}
// ]