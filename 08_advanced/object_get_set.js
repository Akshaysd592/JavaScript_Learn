// getter and setter using object literal 
const User = {
    _email : 'chai@gmail.com',
    _password : "abc",

    get email(){ // same name that of object
      return this._email.toUpperCase() 
    },                                        // this is literal object so , seperated 
    
    set email(val){ // js just think that it is storing in property email because of get email() even inside it you declare any variable
       this._email = val;
    }
}

// this is a factory function that can also be used to create object similar to that of new keyword 

const tea = Object.create(User);
console.log(tea.email); // even accessing value using email still it is giving values back
                        // because it has a setter and getter to get value with name email 
console.log(tea._email) // this will return original defined value not calling getter or setter 

