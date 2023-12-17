class User{
    constructor(username){
        this.username = username;
    }

    static createId(){ //---------- if declared static then not accessible to object created
        return "123";
    }
}

// const newuser = new User("akshay");
// console.log(newuser.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }


}


const iphone = new Teacher("iphone", "a@gmail.com");

console.log(iphone.username);

console.log(iphone.createId()); // since static declared so can not be accessed 