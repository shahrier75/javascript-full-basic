// proto prototype class 

// const user1={
//     firstName:"shahrier",
//     lastName:"hossain",
//     email:"shahrier006@gmail.com",
//     age:24,
//     address:"house number,colony,state",
//     about:function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },

//     is18:function(){
//         return thisage>=18 
//     }
    
// }


function creatUser(firstName,lastName,email,age,address,){

    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return `${this.firstName} is ${this.age} years old.`
    };
    user.is18=function(){
        return this.age>=18 
    }
   
    return user;

}


const user1=creatUser(`shahrier` , `hossain` , `shahrier006@gmail.com` , 18,`myaddress`);
console.log(user1)

const is18=user1.is18();
const about=user1.about()
console.log(about)



