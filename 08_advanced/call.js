function SetUsername(username){
    this.username = username;
    console.log("user is called")
}

function User(username,age,region){
   SetUsername.call(this,username) // we have to call function explicitely to work on it using .call and passing this to store in it else that function will not 
                                    // store value to current object
    this.age = age;
    this.region = region;
}

const user = new User("akshay",21,"Nagpur")
console.log(user);