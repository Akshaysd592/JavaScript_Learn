// task 1 and 2
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greeting(){
       return 'hello dear';
    }
    updateage(newage){
        this.age = newage;
    }

    static hello(){
        console.log("hello static");
        return "hello static"
    }

    get values(){ // getter can access as obj.values , no ()
        console.log(this.name,this.age)
    }
    set values(name){ // setter 
         this.name = name;
         
         console.log(this.name , "value changed ")
    }
}
// create instance and log data
let obj = new Person('ak',21);
// console.log(obj.greeting());
// console.log(obj.age);
// obj.updateage(22);
// console.log(obj.age)
// console.log(obj)









// class inheritance  task 3 and  4 
// Inheritance
class Student extends Person {
    static  studentcount =0;
    constructor(studentId,name,age){
        super(name,age);
        this.StudentId = studentId;
    //     this.studentcount += 1; // can't update it here
    }

    getStudentId(){
        
        return this.StudentId;
    }

    getPersonData(){
        // return [this.age,this.name];
        return {age:this.age,
            name: this.name
        }
    }

    static studentcountvalue(){
        this.studentcount = this.studentcount+1;
        console.log(this.studentcount)
    }
    

    static helloji = super.hello

    greeting(){
        console.log(super.greeting()); // accessing parent function
        // return `hello dear ${this.StudentId}`
        return super.greeting() + ` ${this.StudentId}`
    }



}

const newStudent = new Student(5,'ak',21); // sending data matters
console.log(newStudent)
console.log(newStudent.getStudentId());
console.log(newStudent.getPersonData())
console.log(newStudent instanceof Student)// true
console.log(newStudent instanceof Person)//true
console.log(obj instanceof Person) // true
console.log(obj instanceof Student)// false
console.log(newStudent.greeting())

Number.prototype.greet = function(mark){ // using prototype to assign function in Number 
    console.log("hello ji",mark); // will be accessible to Number type only
}

Object.prototype.marks  = 500;// will accessible to all types of classes


let numcheck = new Number();
numcheck.greet(4)
console.log(numcheck.marks)

let newstring= new String();
// newstring.greet();
console.log(newstring.marks)





// task 5 and 6 
// static => syntax : classname.staticproperty or staticfunction 
Person.hello() // since it is a static fuction 
// obj.hello() not accessible to functions
// newStudent.hello()  // not accessbile to functions
// console.log(newStudent.studentcount) // not access
// newStudent.studentcountvalue() // access
console.log(Student.studentcount)
Student.studentcountvalue()
Student.helloji()

//getter and setter in Person class task 7 and 8 
obj.values;
obj.values = 'san' // can set values as reference only not like a function
obj.values // can access it as reference not as function
console.log(obj)



// Private fields task 9 and 10
class Account {
    #amount = 0; // private is declared using # in js 
    constructor(amt){
        this.#amount = amt;
    }
    deposit(ampt){
      this.#amount += ampt;
    }
    withdrawal(withdraw){
     this.#amount -= withdraw;
    }
    getdata(){
        console.log(this.#amount)
        return this.#amount
    }
}


// creating instance 
let newaccount = new Account(1000);
console.log(newaccount.getdata())
newaccount.deposit(500);
newaccount.getdata();

newaccount.withdrawal(760);
newaccount.getdata();
// newaccount.#amount = 500; // not accessible 