const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)//output: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] , this is a nested array
// console.log(marvel_heros[3][1])  //output: flash

//what is concact() method of array?
const allNewHeroes = marvel_heros.concat(dc_heros) //The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
console.log(allNewHeroes)

//Spread Operator (...):  (check notes below)
const array1 = ['ram', 'shyam', 'cham'];
const array2 = ['dan', 'elf', 'fiona'];
const array3 =  [...array1,...array2]
console.log(array3)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  //nested arrays
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Victor"))  //checking if "Victor" is an array, Returns true if the argument is an array, or false otherwise.
console.log(Array.from("Victor"))    //converting string "Victor" to an array: [ 'V', 'i', 'c', 't', 'o', 'r' ]
console.log(Array.from({name: "Ram"}))  //{name: "Ram"} is an object without length propery, output: [], interesting case,check notes below


//using Array.of() method : (check notes below)
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) //output: [100,200,300]

console.log(Array.of('foo', 2, 'bar', true));
//output: Array ["foo", 2, "bar", true]

console.log(Array.of());
//output: Array []