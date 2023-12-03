//Imediately invoked function expression
// here ; is most important to stop iife function 

(function chai(){  //named iife
    console.log("Inside chai function")
})();


((user)=>{ //iife
    console.log(`${user} is inside the function2`)
})("Akshay");

// ()=>();



