// const coding = ["js","cpp","py","java"]

// const values = coding.forEach((item)=>{
//     console.log(item)
//     // return item; // forEach do not return any value 
// })

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

const valueFiltered = myNums.filter((num)=>( // filter will return values 
    num > 6        // no need of return keyword when using () else in { } use return keyword
))

console.log(valueFiltered);

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
    },
    {
        languageName:"c++",
        languageFile:"c_plus_plus"
    }
]

// filter will return value based on some condition 
const cpBook = myCoding.filter((bk)=> bk.languageName === "c++");

console.log(cpBook);


const nums = [1,2,3,4,5,6,7,8];

const numsmap = nums.map(i=>i+10);
console.log(numsmap)
// can also havemap over map and reduce ...
const numsMap = nums.map((i)=>(i*10)).map((i)=>i+1).filter((i)=>(i>50))

console.log(numsMap)
console.log(nums) // map is not changing original values 


const num = [1,2,3,4,5];

const numreduce = num.reduce((acc,curr)=> acc+curr,0);
// accumulator have initial value assigned 0 here , then acc+curr =>0+1 ,1 from array that is current value 
// get added and stored in accumulator give sum = 1 and process goes on, initialisation of value done only once in starting with 0 here
console.log(numreduce)