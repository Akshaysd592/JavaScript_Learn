// const fetchCheck = { // object literal --> directly creating object 
//     Name: "Ak",
//     Email: "akshaysd592@gmail.com",
//     LoggeIn:8,

//     Methodcheck : function(Name){
//         console.log(`Here we are with getting value ${this.Name}`)
//         console.log(`Here we are with getting value from parameter:  ${Name}`)
//         console.log(this)
//     }
// }


// console.log(fetchCheck.Name);
// fetchCheck.Methodcheck("akshay")
// console.log(this) // here in node environment no values , In windows browser global (this) will have some values from browser


// // constructor
// const promiseOne = new Promise()
// const date = new Date();


function User(userName, loginCount , isLoggedIn){
      this.userName = userName;
      this.loginCount = loginCount;
      this.isLoggedIn = isLoggedIn;

      this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
      }
     
      return this ; // not compulsory
}


// const userOne = User('Akshay',10,true);
// const userTwo =  User('Chai',11,false); // If using like this directly assigning value
//                                         // then value get override because of this pointer that's why using new keyword

// console.log(userOne);



const userOne = new User('Akshay',10,true); // creating new objects
const userTwo = new User('Ak',11,false);  // creating new objects which is diffrent from above object userOne
console.log(userOne);
console.log(userTwo);
userTwo.greeting()