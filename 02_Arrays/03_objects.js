// singleton 


// object literals

// Object.create()
const mySym = Symbol("key1");

const JsUser = {
    name:"Akshay",
    [mySym] : "symbolkey",// symbol datatype declaration using [] 
    age:21,
    "full Name":"Akshay Dhobale",
    email:"akshaysd592@gmail.com",
    location:"Nagpur",
    isLoggedIn: false,
    lastLoggedinDays :["monday","sunday"]
}


// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser[mySym])

// Object.freeze(JsUser)
JsUser.email = "akshaysd@gmail.com"

// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user my name is  ${this["full Name"]}`)
}
// console.log(JsUser.greeting);
JsUser.greeting();
console.log(JsUser)

JsUser.greetingTwo();