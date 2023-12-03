
const user ={                   // object creation  key and value 
                               // in js variable can also store function
                               // function inside function also declared 
    username:"akshay",
    price : 99,

    welcome: function (){
        console.log(`${this.username} , Welcome to website`);
        console.log(this)

    }

    
}


user.welcome();  // akshay
console.log(user.username);
user.username = "Ak"
user.price = 9
user.welcome()
console.log(this)




function hello (){
    const username = "akshay"
    // console.log(this.username)  // this can be used in objects only not in function
}

hello()



const hello2  = function (){
    console.log("Inside hello2 function")
    const username = "ak"
    console.log(this)
}

hello2()



// arrow function 

const hello3 = () =>{
    console.log("Inside hello3 function ")
    console.log(this)
}

hello3()



// const addval = (num1,num2)=>{
//     return num1+num2
// }

// or 
// const addval = (num1,num2)=>(num1+num2)   //() no need of return keyword


// for returning object using {}
const addval = (num1,num2)=>(
    console.log(num1),
    {name :"Akshay"}
    )



console.log(addval(3,4))