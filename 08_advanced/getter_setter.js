
// Using getter and setter so that this properties or variables can not be accessed by anyone directly.

class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }

    // getter and setter will have same name that of property defined  that is password here
     // get and set keyword
     // both getter and setter should be available same at time 


     get password(){
        return `This is getting password : ${this._password}`; // tempory variable will still return original password 
     }

     set password(value){// since password property to be obtained so 
                         // taking value in it
            // this.password = value; // this will make call stack exceeded error because constructor and this function assigning value at same time
            this._password = value; // need to used some another variable but still it will store in  password of the object 
                                    // should not have same name that will make an error 
     }


     // getter and setter for username
     set username(val){
        this.Ausername = val; // can use any variable name to store value
     }

     get username(){
        return `This is username ${this.Ausername}`; // can get what was set 
     }
}


const newuser = new User("Akshay","123");

console.log(newuser.password);

console.log(newuser.username);







// ----------------------Old syntax ----------


function User1(email,password){
      this._email = email;
      this._password = password;

      Object.defineProperty(this,'email',{
        get:function(){
            return  this._email.toUpperCase();
        },
        set:function(value){
            this._email = value;
        }
      })
}

const chai = new User1("chai","345");

console.log(chai.email);