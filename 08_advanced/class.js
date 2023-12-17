// class user {
//     constructor(username,age,password){
//         this.username = username; //properties
//         this.age = age;
//         this.password = password;
//     }

//     greet(){ // method 
//         console.log("greet called")
//         return `${this.password}abc`; // value returned
    
//     }
// }


// const newUser = new user("Akshay",21,"ak");
// console.log(newUser.greet());

// let valuereturned = newUser.greet();
// console.log("value returned ",valuereturned);



// // Behind the scene

// function User(username,age,password){
//     this.username = username;
//     this.age= age;
//     this.password = password;
// }

// User.prototype.greet = function(){
//     return `${this.password}abc`
// }


// const user = new User("ak",21,'pass');
// console.log(user);
// console.log(user.greet());


// -----------------------
// Inheritance 

class User {
    constructor(username){
        this.username = username;
    }

    addMe(){
        console.log(`This is your username:  ${this.username}`)
    }
}

class Teacher extends User{ // extends used for inheritance from User
      constructor(username,age,password){
        
        super(username) //-------------------- super will work like .call and 
                        // do all working like passing  .this and getting value returned 
        this.age = age ;
        this.password = password;
         }

      addCourse(){
        console.log(`The course is created by ${this.username}`)
      }
}

const chai = new Teacher("Ak",21,"123"); // object creation 

chai.addCourse();



const tea = new User("akshay");
tea.addMe();

console.log(tea instanceof User); //  is object of righthand side class
console.log(chai instanceof User); // because of inheritance




