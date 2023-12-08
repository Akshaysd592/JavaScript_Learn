

const arr = [1,2,3,4,5];

for(let i in arr){  //for in loop points to the index
    console.log(i)
   
}
console.log(" ")



for(let i of arr){  // of loop points to values 
    console.log(i)
}

const greeting = "Hello Duniya";

for(let i of greeting){
    if(i==' ')
    continue;
    console.log(`character is ${i}`)
}

const map = new Map();
map.set('In',"India");
map.set('Jap',"Japan");
map.forEach((value,index)=>(console.log(`Index is ${index} and value is ${value}`)))
console.log(map)
// for of loop will work on Map() object 
for(let [key , value] of map){
    console.log(value);
}


// Below for in loop will not work on Map() object 
for(const index in map){ // not work 
    console.log(index);
}





// Below types of object can not be iterated using for of loop
// But can access it using for in loop 
const Myobject  = {
    "game1" :"NFS",
    "game2" : "Spiderman"
}

// for(const [key,value] of Myobject){
//     console.log(`key ${key} and value is ${value}`)
// }

for(const i in Myobject){  // Normal object will work 
    console.log(Myobject[i])
}

// Iterating over array 

const programming = ["js","c","python"]

console.log("Iterating on programming array using for of loop")
for(const value of programming){
    console.log(value)
}

for(const [key] in programming){  
    console.log(`key is ${key} and value is ${programming[key]}`);
}

programming.forEach((i)=>{console.log(i)})


// passing function as an argument in forEach loop 
function printMe(programming){
    console.log(programming)
}

programming.forEach(printMe);

programming.forEach((item,index,arr)=>{
    console.log(`forEach returns item ${item} and index ${index} and ${arr}`)
})

// array including objects
const myCoding = [
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"python",
        languageFile:"py"
    },
    {
        languageName:"c++",
        languageFile:"cpp"
    }
]


myCoding.forEach((item)=>{
    console.log(item.languageName)
})