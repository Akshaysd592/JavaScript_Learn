// checking values of some library is changable or not

const mathobj = Object.getOwnPropertyDescriptor(Math,'PI');

console.log(mathobj); // It shows that it is not changable


//user defined 

const chai ={
    name: "normal chai",
    price : 10,
    isAvailable : true,

    greet : function(){
        console.log("All the best")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));// can get info about properties and methods in library

// make changes in it
Object.defineProperty(chai,'name',{
    writable:false,// will not change
    enumerable:false ,// not iterable by any loop 
})


console.log(Object.getOwnPropertyDescriptor(chai,'name')); //now name is not writable 

// objects are not normally iterable
for(let [key,value] of Object.entries(chai)){
    if(typeof value != 'function'){
        console.log(` ${key} : ${value}`);
    }
}