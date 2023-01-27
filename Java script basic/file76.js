

// const user1={
//     firstName:"sami",
//     age:"28",
//     about:function(){
//         console.log(this.firstName,this.age);
//     }
  
// }

const user1={
    firstName:"sami",
    age:"28",
    about(){
        console.log(this.firstName,this.age);
    }
  
}

user1.about()


