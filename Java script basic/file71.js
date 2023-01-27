// method 
// function inside object 

function personInfo(){
    
 console.log(`person name is ${this.firstName} person age is ${this.age}`)
}


const person1={
    firstName:"shahrier",
    age:25,
    about:personInfo

}

const person2={
    firstName:"adnan",
    age:20,
    about:personInfo

}

const person3={
    firstName:"atif",
    age:30,
    about:personInfo

}


person1.about()
person2.about()






