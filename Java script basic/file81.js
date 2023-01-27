function hello(){
  console.log("hello world")
}

// const hello={key1:`value2`}

// console.log(hello.name)


// hello.myOwnproPerty="very uniq value"
// console.log(hello.myOwnproPerty)


// console.log(hello.prototype)

// if(hello.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("proto type is not present")
// }

hello.prototype.abc="abc"
hello.prototype.sing=function(){
    return "lalalal"
}


console.log(hello.prototype.sing())


