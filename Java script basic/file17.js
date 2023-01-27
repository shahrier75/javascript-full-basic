// nested if else 

// winning Number

// 19 your gase is right 
// 17 your gase is low
// 22 your gase is high


let winningNumber=19;
let userguess=+prompt("guess a number")

if (userguess === winningNumber){
    console.log("your guess is right")
}else{

    if(userguess<winningNumber){
        console.log("your gase is too low!!")
    }else{
        console.log("your gase is too high!!")
    }
}
