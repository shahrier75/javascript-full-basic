// 2015/es6
// class keyword
// class are fake 


class CreateUser{
    constructor(firstName,lastName,email,age,address){
        console.log("constructor called")

        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address;
    

    }

    about(){
        return `${this.firstName} is ${this.age} years old.`
    ;}
    is18(){
        return this.age>=18
    }
    sing(){
        return `iv become so numb `
    }

}

const user1=new CreateUser(`shahrier` , `hossain` , `shahrier006@gmail.com` , 18,`myaddress`);


