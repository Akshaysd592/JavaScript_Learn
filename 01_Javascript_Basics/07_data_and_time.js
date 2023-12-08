// Dates 
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate))


let mycreatedate = new Date(2023,0,23,5, 34,8);
console.log(mycreatedate.toLocaleString());
let mynewdate = new Date("2023-01-23");
console.log(mynewdate.toString());
console.log(mynewdate);


let timeStamp = Date.now();
console.log(timeStamp);
console.log(mycreatedate.getTime())


console.log(Math.round((Date.now())/1000))

const date =new Date();
console.log(date)
console.log(date.getDay())
console.log(date.getMilliseconds());

console.log(date.toLocaleString('default',{
        weekday:"short",
        
}
))