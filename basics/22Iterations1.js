//for loop:
const array = [23,44,5,6,7,1]
console.log("Array is: ");
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    process.stdout.write(element + " ");  // Outputs elements on the same line
  
}
//output:
// Array is: 
// 23 44 5 6 7 1
console.log("\n");

//nested for loop e.g:
// for(let i = 0;i<=3;i++){
//     console.log(`When i is: ${i}`);
//     for(let j = 0;j<=3;j++){
//         console.log(j);
//     }
// }

const array23 = [23, 44, 5, 6, 7, 1];
console.log(array23.join(" ")); // Outputs: 23 44 5 6 7 1, keep in mind we used .join() method outside the loop

//more example:
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}
