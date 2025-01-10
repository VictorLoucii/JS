const account_Id = 14333 //can't make any changes to constant variables
let email = 'kwickslow30@gmail.com'  //declaring varaible using 'let' (preferred)
var password = 'sunshine'   //declaring variable using 'var' (not preferred)
accountCIty = 'Jaipur'  //declaring variable without using 'let' and 'var'(not preferred)
console.log(password,account_Id)
let weather;  //declaring a variable using 'let' but not defining it, this will give the otuput "undefined" if we try to print 'weather'

email = 'hitesh@hotmail.com' //reassigning
password = 'poona'   //reassigning
accountCIty = 'delhi'    //reassigning

//using console table functionality:
console.table([email,password,accountCIty, weather])
/*
don't use var for declaring variables because of problems in block and functional scope

*/