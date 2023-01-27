
// call 
// apply 
// Bind 

function about(hobby,favoriteMusician){
    console.log(this.firstName,this.age,hobby,favoriteMusician)
}



const user1={
    firstName:"shahrier",
    age:"24",
    
}

const user2={
    firstName:"sami",
    age:"28",
  
}

// call
// user1.about.call(user2,"travelling","linkinkPark")

// apply
// user1.about.apply(user1,["travelling","linkinkPark"])

// bind 
const func=about.bind(user2,"travelling","linkinkPark")
func()








