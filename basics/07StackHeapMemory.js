//There are two types of memory:
//Stack(primitive types) and Heap(Non primitive)

//e.g of stack memory:
let youtubeName = "vic";  //original value
let twitchName = youtubeName;

twitchName = "bansa"
console.log(youtubeName, twitchName)

//e.g of heap memory:
let obj1 = {    //obj1 is the original object
    email:"kwickslow.gmail.com", upi: "bhim"
}
let obj2 = obj1;
obj2.upi = "paytm"  //changes made to obj2 attribute, resulting in change to the original attribute as well

console.log(obj1.upi, obj2.upi)