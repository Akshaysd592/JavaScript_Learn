// let accessheading = document.getElementsByTagName('h1')

// let accessbtn = document.querySelector('button')

// // console.log(accessbtn)
// // console.log(accessheading)
// changeval = true


// accessbtn.addEventListener('dblclick',()=>{
//     // accessheading[0].innerHTML = "Good Morning"
//     changeval = !changeval;
//   let  makevisible  = changeval ? 0:1;
//     console.log(changeval)
//     console.log(makevisible)
//     accessheading[0].style.opacity = makevisible
// })


// let accessBody = document.getElementsByTagName('body')
// accessbtn.addEventListener('mouseover',()=>{
//       accessBody[0].style.backgroundColor = 'red'
// })

// accessbtn.addEventListener('mouseout',()=>{
//     accessBody[0].style.backgroundColor = 'white'
// })

// let accessbody  = document.addEventListener('keydown',(e)=>{
//     console.log(e.code)
//     let accessh1 = document.querySelector('h1')
//     let createp = document.createElement('p')
    
//     createp.append(e.code)
    
//     accessh1.innerHTML = e.code
// })



// let accessdata = new Promise(async(resolve,reject)=>{
//     try{
//         let data  = await fetch('https://catfact.ninja/fact')

//         if(data){
//             console.log("data obtained")
//            await reject(43)
//         }

    
//     }catch(error){
//         console.log(error)
//     }
// })


// let accessdata = async ()=>{
//     try {
//         let data = await fetch('https://catfact.ninja/fact')
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//         console.log("error occured")
        
//     }
// }

// accessdata()

// let promise1 = fetch('https://catfact.ninja/fact')
// let promise2 = Promise.resolve("this message resolved")
// let promise3 =  function (resolve,reject){
//        resolve("this promise3 is resolved")
//        console.log("resolved")
// }

// Promise.race([promise1,promise2,promise3]).then((data)=>{
//     console.log("all promises resolved in promise all")
//     console.log(data)
// })

let promiseresolve = new Promise((resolve,reject)=>{
    
   resolve(45)
  
}).then((data)=>{
    console.log(data,"data obtained")
    return new Promise(function (resolve,reject){
        console.log("data obtained 2")
        resolve("ok done")
    })
}).then((data)=>{
    console.log("again data obtained",data)
})