// //task1 
// let messageHandler = async(num1,num2)=>{
//     try{
//         console.log("Inside try block")
//       if(num1%num2 === 0)
//         throw new Error("Yes , Denominator is zero")

//     }catch(error){
//         console.log("Inside catch block")
//         console.log(error)
//     }finally{
//         console.log("Inside finally block")
//     }
// }

// messageHandler(8,4)


class error1 extends Error {
     
    
    constructor(err){
          super(err)      
    }



}

function validate (input){
    try {
        if(input.trim().length===0){
            throw new error1('input length is zero')
        }
        console.log("all ok")
    } catch (error) {
        console.log(error)
    }
}

// validate("")

// let callfunc = ()=>{
//         try {
//             throw new error1("this is an error")
//         } catch (error) {
//             console.log(error)
//         }
// // }
// // callfunc()

// let resolved = new Promise(async function(resolve,reject){
//   try {
//     // await resolve("this func is resolved")
    
    
//   } catch (error) {
//        console.log(error,"error")
//   }finally{
//     console.log('inside finally')
//   }
   
// })

// let accessdata = async()=>{
//     try {
//      let data =  await fetch('https://catfact.ninja/fact')

//         if(data){
//             console.log(data)
//         //   throw  new Error("this is an error")
//         }
//     } catch (error) {
//         console.log(error,)
//     }
// }
let accessdatathen = async()=>{
    let data = await fetch('https://catfact.ninja') 

}

accessdatathen().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error,"error")
})

// console.log(resolved)