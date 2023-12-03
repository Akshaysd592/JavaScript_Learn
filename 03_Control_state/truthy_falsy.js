const userEmail = "0"

if(userEmail){
    console.log("got user email")
}
else{
    console.log("don't got any email")
}


const user = {
 name:"ak"
}

const emptyarr = []

if(emptyarr.length === 0){
    console.log("This is empty array")
}
console.log(Object.values(user))
console.log(Object.keys(user))



if(Object.keys(user).length===0){
    console.log("user does not exist exist")
}



// Nullish coalesing operator ??  used only with null or undefined

// let val1 =null??24;
// let val1 = undefined ?? 44;
let val1 = undefined ?? null ?? 45;

console.log(val1);




// Ternary operator like if condition

(200>100) ? console.log("yes"):console.log("no");
