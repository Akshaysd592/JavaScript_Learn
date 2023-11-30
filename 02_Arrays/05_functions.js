function sayMyName(){
  console.log("H");
}

// sayMyName()



function addTwoNumber(num1,num2){
    console.log(num1+num2)
    return num1+num2;
}


// const result  = addTwoNumber(3,4);

// console.log(result);


function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter a username");
        return 0 ;
    }
    
    return `${username} Just loggedIn`

    
}


// const value = loginUserMessage("Akshay");
// console.log(value)



function calculateCartPrice(val1,...num1){ // rest operator
   return num1; 
}


console.log(calculateCartPrice(2,4,3,5));


const user = {
    name:"Akshay",
    age:21
}


function handleObject(anyobject){
    console.log(`My name is ${anyobject.name} and my age is ${anyobject.age}`)
}

// handleObject(user); passing object in function
handleObject({name:"akshay",age:21})








const myNewArray  = [200,400,100,600]


function returnSecondeValue(getArray){
    return getArray[1];
}


console.log(returnSecondeValue(myNewArray))