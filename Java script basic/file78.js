
const userMethods={
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age>=18 
    }

}


function creatUser(firstName,lastName,email,age,address,){

    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethods.about;
    user.is18=userMethods.is18
    
   
    return user;
}

const user1=creatUser(`shahrier` , `hossain` , `shahrier006@gmail.com` , 18,`myaddress`);
const user2=creatUser(`shahrier` , `hossain` , `shahrier006@gmail.com` , 18,`myaddress`);
const user3=creatUser(`adnan` , `hossain` , `shahrier006@gmail.com` , 18,`myaddress`);
console.log(user1.about())
console.log(user3.about())