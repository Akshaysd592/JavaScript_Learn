// primitive and non primitive 


// primitive call by value 
// 7 categories 
// Number , null , string , Boolean , undefined , BigInt , Symbol 

const score = 100.434
console.log(typeof(score))
const Id = Symbol("123");
const Id1 = Symbol("123");
console.log(typeof(Id))
console.log(Id === Id1)


// Non primitive  reference type 

// Array , Objects , Functions 

let arr1 = ["akshay","Dhobale"];
let obj = {
    "Name":"akshay",
    "age": 22
}

let func = function(){

}

let num = 4314243432432632452335343453n
console.log(typeof(num))
