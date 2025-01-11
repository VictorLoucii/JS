//strings is a primitive(value type) data type, it can be denoted by single quote '' or double quotes ""

//let const name = 'victor' // this statement will throw an error, you cannot use let and const together to declare a variable. Both let and const are keywords for declaring variables, but you can only use one of them at a time

const name = "victor";  // Declaring a const string 'name' which is a primitive data type
const id = 36

//using string interpolation:
console.log(`Name is ${name.toUpperCase()} and id is ${id}`)  //toUpperCase() converts all the const string characters in upper cases

const gameName = new String('kwick')  // Declaration of a const String object 'gameName' with value 'kwick' using the new keyword, this is a non primitive(reference) data type

//some string method examples:
console.log(gameName, gameName[3], __proto__)
console.log(gameName.length, gameName.toUpperCase(), gameName.toLowerCase(), gameName.charAt(3))
console.log(gameName.indexOf('i'))

const ggwp = "christmas"
const newString = ggwp.substring(0,5)  //0 is the starting index and 5-1 will be the ending index of the substring
console.log(newString)
const anotherString = ggwp.slice(-8,4)
console.log(anotherString)

const state = "    Delhi    "
console.log(state)
console.log(state.trim())  //trim() method removes the spaces

const url = "https://github.com/VictorLoucii/JS/tree/main/basics"
console.log(url.replace('tree','flower'))

console.log(state.includes('Delhi'))  //includes will check whether state contains 'Delhi' or not and return true if found and false if not found
console.log(state.includes('Pune'))

const statement1 = "my new year resolution"
console.log(statement1.split(" "))

//split example:
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.split())    //check notes below

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
