// function sayHello(nums){
//    return nums*5;
// }


// sayHello.newval = 10;

// console.log(sayHello(4));
// console.log(sayHello.newval); // function can be a function and also object
// console.log(sayHello.prototype);


function protocheck (username, price){
    this.username = username;
    this.price = price;
}

protocheck.prototype.readme = function(){
    console.log("hello ji kaise ho sare");
}

protocheck.prototype.giveprice = function(){ // adding additional function in above function using prototype
       this.price++ ;
}

const chai = new protocheck('chai',5);
const tea = new protocheck('tea',10); // new is important while creating object.

console.log(chai);
console.log(tea.giveprice()); // When using that prototyped function no need to use .prototype it will take it automatically 

