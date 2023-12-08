
// stack memory that is  call by value type
let var1= "Akshay";

let var2 = var1;
var1 = "Sanket"

console.log("var1 value is "+var1);
console.log("var2 value is ",var2);

// heap memory that is of reference type 
// includes array , function and objects

let obj = {
    "Name":"Akshay",
    "Age" : 21
}

console.log(obj);
console.log(obj.Name);
console.log(obj.Age);

obj.Age = 22;
console.log("After updating the age in object ",obj.Age);