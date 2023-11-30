// // singleton

// // const tinderUser  = new Object(); 
// const tinderUser = {}
// tinderUser.id = "123";
// tinderUser.name = "akshay"
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser);

// const regularUser ={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"akshay",
//             lastname:"Dhobale"
//         }
//     }
// }


// console.log(regularUser.fullname.userfullname.firstname)



// const obj1 ={1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}



// // const obj3 = {...obj1, ...obj2}  // spread operator
// // const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2) // here target is {}

// // console.log(obj3)



// const user = [
//     {
//         name:"akshay"
//     },
//     {
//         name:"sanket"
//     }
// ]


// // console.log(user[0].name)

// console.log(tinderUser);

// // accessing keys and values
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


const course  ={
    coursename:"js ",
    price:"999",
    courseInstructor : 'akshay'

}


const {courseInstructor : instructor} = course
console.log(instructor);



const navbar = ({company})=>{

}


navbar(company = "akshay")


// json

// {
//     "name": "akshay",
// }