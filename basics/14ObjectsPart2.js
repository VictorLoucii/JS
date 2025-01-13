//below statement assigns an object:
// const tinderUser = new Object() //this is singleton object, the output will be similar like the below statement
//below statement assigns an object:
const tinderUser = {} //this is non singleton object, the output will be same like the above statement
tinderUser.id = "Sam"
tinderUser.age = 23
tinderUser.profession = "Teacher"
console.log(tinderUser)  //output: { id: 'Sam', age: 23, profession: 'Teacher' }

//below is an example of nested objects
const user1 = {
    fullname: {
        name: {
            firstname: "Victor",
            secondname: "Loucii"
        }
    }
}
console.log(user1.fullname) //output: { name: { firstname: 'Victor', secondname: 'Loucii' } }
console.log(user1.fullname.name.firstname) //output: Victor
// console.log(user1.fullname?.name.firstname) //check notes below

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// console.log(obj3) //output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } , this is not the desired output
const obj3 = Object.assign({},obj1,obj2) //use {} inside(), check notes below
console.log(obj3) //output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } , this is the desired output


//assigning object using spread(...)operator, which we will use most of the time:
const obj4 = {...obj1,...obj2}  
console.log(obj4)  //outupt: //output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } , this is the desired output

//example of an array object and how to access it's properties/keys:
const users = [
    {
        name: "victor"
    },  //don't forget to put a comma here if multiple name exists
    {
        name: "ronnie"
    },
    {
        name: "alex"
    }
]
console.log(users[1].name) //output: ronnie
console.log(tinderUser) //output: { id: 'Sam', age: 23, profession: 'Teacher' },{} in the output indicates that the data is being represented as a JavaScript object

console.log(Object.keys(tinderUser))  //output: [ 'id', 'age', 'profession' ] , ouput is returned in an array
console.log(Object.values(tinderUser))  //output: [ 'Sam', 23, 'Teacher' ], ouput is returned in an array
console.log(Object.entries(tinderUser))  //[ [ 'id', 'Sam' ], [ 'age', 23 ], [ 'profession', 'Teacher' ] ], Object.entries() converts an object into an array of [key, value] pairs.

console.log(tinderUser.hasOwnProperty("age")) //output :true, checks if there is any property named 'age' in the object 'tinderUser'

