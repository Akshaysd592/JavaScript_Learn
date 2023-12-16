
//  promise is used to do async work which will either complete or get rejected 

// const promiseOne = new Promise(function (resolve,reject){
//     // Do any async task 
//     // like DB call , network call , etc
//     setTimeout(function(){
//           console.log("Async task is completed");
//         //   resolve(34); // resolved the data so that can go to then block
//         resolve({"name":"Akshay"});
//         // reject(new Error('something went wrong')); // explicitely passing error message
//     },2000)
// })

// // .then will get result in it
// promiseOne.then(function(data){
//        console.log("here we are in then block ")
//        console.log("Data obtained is ",data)
      
// })

// // catch work when some error occured 
// promiseOne.catch(function(error){
//     console.log("here we are in catch block");
//     console.log("Error obtained in catch block is ", error);
// })


// // can also work promise -> .then ->  .catch in one go 


// promise works on normal function also but no need to use promise for
// normal function use when async function to be used 
const promise2 = new Promise(function(resolve,reject){ // when using variable to store function then only use referece variable name to make working like : promise2 not promise2(); or ()=>promise2();
   setTimeout(function(){ // async function 
    let error = false;
    if(!error){
        resolve({name:"Akshay",email: "akshaysd592@gmail.com"});
    }
    else{
        reject('Error: Something went wrong');
    }
   }, 2000);
})


promise2.then(function(data){ // variable can not access this data.name returned
     console.log(data);
     return data.name; // this data.name will be accessed by next .then function
})
.then(function(d){ // data.name that is returned in earlier call is obtained here in this then into d 
       console.log(d);
})
.catch(function(error){ // to handle error occured 
       console.log(error)
})
.finally(function(){ // finally always works 
     console.log("Either resolve or reject finally will always works ")
})


