// let name = "akshay        ";

// // console.log(name.trim().length) 

// // console.log(name.truelength) // there is not function coming with string by default that return 
//                              // true string which make trim and return length

    

//  const hero = ["thor","spiderman"]
 
 
//  // creating a object
//  let heroPower = {
//     thor:"Hammer",
//     spiderman :"sling",

//     getSpiderPower : function(spiderman){
//         console.log(`Spider power is ${this.spiderman}`) // object spiderman
//         console.log(`Spider man local is ${spiderman}`) // parameter passed spiderman 

//     }
//  }
//  //  heroPower.getSpiderPower("gamechanger");

// //---------------------------------------------------

//  // declaring global akshay function that can be accessed by any object created using Object 
//  // There is nothing over Object => object is last entity and everything below Object
//  // Declaring function from object(from top ) acceesible everywhere on objects
//  Object.prototype.akshay = function(){ 
//     console.log(`Hello dear akshay is available in all objects `)
//  }


// // hero.akshay();
// // heroPower.akshay();

// //--------------------------------------------
 


// // Now declaring function from  Array object  (from bottom) and now checking can Object access it.
// // yes It can be accessed by Object but not all objects only declaring object can access it . 
// // will not be distributed to others
// Array.prototype.hey_ak = function(){
//     console.log("I am ok are you ok ");
// }



// // hero.hey_ak();

// // heroPower.hey_ak(); // It is not accessible because from bottom to top from Array to Object



// // --------------------------------------------------------------------
// // Inheritance 

// const User = {
//     Name: "Akshay"
// }


// const Teacher = {
//     Subject : "DSA"
// }


// const TASupport  = {
//     makeAssignment : 'JS Assignment',
//     fullTime : true,

//     __proto__ : Teacher // for inheritance old syntax

// }

// Teacher.__proto__ = User  

// console.log(TASupport);


// // modern syntax 
// Object.setPrototypeOf(TASupport,Teacher) // TASupport getting values of Teacher 



// user Defined function to be used on string

let useName = "Akshay    ";

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`The True length is  ${this.trim().length}`)
}


useName.trueLength();

'Aman'.trueLength();

'Aman  '.trueLength(); // can access on any string values 