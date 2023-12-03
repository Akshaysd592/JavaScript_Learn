// let a = 10;
// const b = 20;
// var c = 30;

// if(true){
//    var  c = 33;
//    let a = 100;
// }



// console.log(a)
// console.log(b)
// console.log(c)



function func1(){
   const name = "Akshay";

   function func2 (){
      const innername ="Ak";
      console.log(name);
      console.log(innername)
   }
   // func2 scope is completed with above bracket close
   // console.log(innername);
   func2();



}

// func1 function call 
func1();


// -------------interesting------------
console.log(addone(5));

function addone(num){                // function declaration
   return num+1;
}



// console.log(addtwo(8)); // this will give error because of the function declaration type changed

const addtwo = function (nums){   // this is also function declaration  but hoisting not applied
   return nums+2; 
}

console.log(addtwo(8));



