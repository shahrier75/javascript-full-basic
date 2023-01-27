// statics method and properties 


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

eat(){
    return `${this.firstName} is eating`;
}
isSuperCute(){
    return this.age<=1;
}
isCute(){
    return true;
}

}


const person1= new person("shahrier","hossain",26)
console.log(person1.eat())







