 const arr1 = ["ak","sh","ay"];
 const arr2 = ["sa","nk","et"];
//  arr1.push(arr2);
//  console.log(arr1[3][0]);



// const arr3 = arr1.concat(arr2)
// console.log(arr3);


const arr3= [...arr1,...arr2];
// console.log(arr3)


const newarr = [1,2,3,[4,5,6],7,[4,3,[3,4]]];


const real_another_array = newarr.flat(Infinity);
console.log(real_another_array)


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Akshay"})) // not able to make array then return empty array


let score1 = 100;
let score2 = 200;
console.log(Array.of(score1,score2));

