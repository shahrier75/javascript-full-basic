// getter and setters 

class  person{
    constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}
get fullName(){
return`${this.firstName} ${this.lastName}`
}
setName(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}


}


const person1= new person("shahrier","hossain",25)
// console.log(person1.fullName())
console.log(person1.fullName)

person1.setName("shahrier","Hossain")
console.log(person1.firstName)
console.log(person1.lastName)
