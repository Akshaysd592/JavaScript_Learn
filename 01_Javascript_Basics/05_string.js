let name = "Akshay"
let repoCount = 32


console.log(name + repoCount + "Values");  // not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamescore = new String("akshay")
console.log(gamescore);
console.log(gamescore.__proto__);
console.log(gamescore.length)
console.log(gamescore.includes("ak"));
console.log(gamescore.toUpperCase());
console.log(gamescore.indexOf("s"));


let newString = gamescore.substring(1,4) // negative values not allowed
let newstring2 = gamescore.slice(-5,5) // can also use negative values 
console.log(newString);
console.log(newstring2);


const newStringOne = " hitesh "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = 'https://localhost:3000/akshay%20dhobale';

const newurl = url.replace('%20','-')
console.log(url);
console.log(newurl);
console.log(url.includes('sanket'))


console.log(url.split('/').slice(-1));
