
// const promise1 = new Promise(function(resolve,reject){
//     // async function declaration
//     setTimeout(() => {
//         let error  = false;
//         if(!error){
//             resolve({name:"Akshay",email:'akshaysd592@gmail.com'});
//         }
//         else{
//             reject("Error: Something went wrong");
//         }
//     }, 2000);
// })

// // Either use .then and .catch
// // OR
// // async await -> good to use

// // when function is called then only promise will work in async function
// async function getData (){ // here we can handle obtained data and error as well using try catch
//    try {
//             const obtained_data =  await promise1 // don't pass like promise1() this is reference
//             console.log(obtained_data); // obtained 

//    } catch (error) {
//             console.log(error);  //  error here 
//    }
// }

// // function call
// getData();




// async function datafetch (){
//     try {
//         const data  = await fetch("https://api.github.com/users/akshaysd592") // fetching data so time consuming
//         const parsedata = await data.json(); // parsing in json also takes time so await used
//         console.log(`Json data --------------> ${parsedata}`)
//         console.log(parsedata);
        
//     } catch (error) {
//         console.log("Error: " ,error);
//     }
// }

// // function call
// datafetch();


fetch('https://api.github.com/users/akshaysd592')
.then((response)=>{
    return response.json();
})
.then((data)=>{ // this then will take response.json() data
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})