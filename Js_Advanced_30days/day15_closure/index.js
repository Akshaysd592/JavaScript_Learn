// task 1
 // understanding

// function gethelp(){
//     // let name = "ak";
//     let count = 0;
//     // let newfunc=()=>{
//     //     console.log(name);
//     // }
//     // newfunc();
//     return function increment(){
//         count+= 1;
//         return count;
//     }

// }

// let increment = gethelp();

// console.log(increment())
// console.log(increment())
// console.log(increment())



//task 2 
// practical closure

// let func1 = (idlength = 6)=>{
//    let  idgenerated = "";
//     function generateid(){
//          for(let i = 0;i<idlength;i++){
//            let num = Math.round(Math.random()*9);
//            idgenerated+= num;
//          }
//          console.log("idgenerted: ",idgenerated)
//          return idgenerated;  
//     }
//     let idgen = generateid();
//     let numval = parseInt(idgen);
   
//     return  function increment(){
//         // incr= ()=>{
//         //    numval =  numval+1;
//         //    return numval;
//         // }
//         // incr();
//         numval += 1;
//         return numval;
//     }
  

// }

// // let increm = func1(6);
// export const increm = func1();
// console.log(increm());
// console.log(increm());
// console.log(increm());
// console.log(increm());
// console.log(increm());
// console.log(increm());
// console.log(increm());


// let check = (name="sir")=>{
    
//    return   ()=>{
//          console.log("Good morning ",name)
//     }
// }

// let check1= check("akshay"); // arrow function returned
// check1();



// clousure in loops

// let arr = [function val(){
//     console.log("this is 1")
// },function val2(){
//     console.log("this is 2")
// }]

// arr.forEach((value,index)=>{
//     value()
//     console.log(index);
// })


// task 4
// // module pattern
// let funcitems = ()=>{
//     let items = 1;
//     return{
//         add : ()=>{
//             items+= 1;
//         },
//         subtract: ()=>{
//             items-=1;
//         },
//         show:()=>{
            
//             return items;
//         }
//     }
// }


// let newfunc  = funcitems();
// newfunc.add()
// console.log(newfunc.show());
// newfunc.subtract()
// console.log(newfunc.show());
// // console.log(newfunc.add());




// task 5 
// memoisation

// function close(){
//     let map = new Map()
//     let index = 1;

//    let value = (()=>{
//      return "hello"
//    })();

//    return  function(){
//       map[index++] = value;
//       console.log(map[index-1],index);
//    }
// }


// let func  = close();
// func();


// factorial using memoisation
let map = new Map();
function factorial(n){
     //base case
     if(map[n]){
        return map[n];
     }

     if(n==1){
        return 1;
     }

    let result = n*factorial(n-1);
    return result;
}


let value = factorial(4);
console.log(value)