



function CreateUser(firstName,lastName,email,age,address,){

    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address;
    
}
CreateUser.prototype.about=function(){
         return `${this.firstName} is ${this.age} years old.`
;}


CreateUser.prototype.is18=function(){
            return this.age>=18
;}

CreateUser.prototype.sing=function(){
    return `iv become so numb `
}




const user1=new CreateUser(`shahrier` , `hossain` , `shahrier006@gmail.com` , 18,`myaddress`);
const user2=new CreateUser(`shahrier` , `hossain` , `shahrier006@gmail.com` , 18,`myaddress`);
const user3=new CreateUser(`adnan` , `hossain` , `shahrier006@gmail.com` , 18,`myaddress`);



for (let key in user1){
    // console.log(key);

   if(user1.hasOwnProperty(key)){
    console.log(key)
   }

}
