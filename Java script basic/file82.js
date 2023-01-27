 
// const userMethods={
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18 : function(){
//         return this.age>=18 
//     },
//     sing:function(){
//         return `iv become so numb `
//     }
     
// }




function createUser(firstName,lastName,email,age,address,){

    const user=Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    
    return user;
}
createUser.prototype.about=function(){
         return `${this.firstName} is ${this.age} years old.`
;}


createUser.prototype.is18=function(){
            return this.age>=18
;}

createUser.prototype.sing=function(){
    return `iv become so numb `
}




const user1=createUser(`shahrier` , `hossain` , `shahrier006@gmail.com` , 18,`myaddress`);
const user2=createUser(`shahrier` , `hossain` , `shahrier006@gmail.com` , 18,`myaddress`);
const user3=createUser(`adnan` , `hossain` , `shahrier006@gmail.com` , 18,`myaddress`);
console.log(user1)
console.log(user1.is18())
// // console.log(user3.sing())