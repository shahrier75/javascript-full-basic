// map  
// map is iterable 

// const person={
//     firstName:"shahrier",
//     age:24,
// }
// console.log(person.firstName)
// console.log(person["firstName"])


const person= new Map()

person.set(`firstName`,`shahrier`);
person.set(`age`,7)
person.set(1,"one")
// console.log(person)
// // console.log(person.get("age"))
// console.log(person.keys())

// for (let key of person.keys() ){
//     console.log(key,typeof key)
// }


// for (let [key,value] of person){
//     console.log(key,value)
// }


const person1={
    id:1,
    firstName:"shahrier"

}


const userInfo=new Map();
userInfo.set(person1,{age:8,gender:"male"})
// console.log(userInfo)
console.log(person1.id)
console.log(userInfo.get(person1).gender)





