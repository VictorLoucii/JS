//while and do while loop:

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

//example:
let myArray = ['flash', "batman", "superman"]
let i = 0;
while(i<myArray.length){
    console.log(`Array index ${i+1} is : ${myArray[i]}`);
        i = i+1;
    }
//do while loop:
//this loop executes once even if the condition is false
//for e.g:
let score = 5
do{
    console.log(`Score is ${score}`);
    score++;
}while(score<=8)
//suppose if the socre variable is 9, the loop will still execute once and the 
// output will be: Score is 9