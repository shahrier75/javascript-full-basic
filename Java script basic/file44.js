// function 

function singHappyBirthday(){

    console.log("happy birthday to you.....")

}

function sumTwoNumbers(number1,number2){
    return number1,number2;
}

// const returnedValue= sumTwoNumbers(4,9);
// console.log(returnedValue)

// is even
// input:1 number1
// output:true,false 

// function isEven(number){
//     return number%2===0
// }
// console.log(isEven(2));


// function 
// input:String
// output:firstcharacter


// function firstcharacter(anyString){
//     return anyString[0]
// }


// console.log(firstcharacter("abx"))



// function 
// input : array ,Target,(number)
// output:  index of target if target present in array 

function findTarget(array, target){

    for(let i=0; i<array.length;i ++){
        if (array[i]===target){
            return i;
        }
    }

    return -1;
}

const myArray=[1,3,8,90]
const ans =findTarget(myArray,8)
console.log(ans)



