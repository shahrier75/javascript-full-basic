
// arrow function

// const singHappyBirthday=function(){
//   console.log("happy birthday to you.....")
// }


const singHappyBirthday = () =>{
    console.log("happy birthday to you.....")
  }

  singHappyBirthday()
  




const sumThreeNumbers=(num1,num2,num3)=>{
    return num1+num2+num3
}

const ans= sumThreeNumbers(2,3,4);
console.log(ans)



// const isEven=function(number){
//     return number % 2 === 0
// }


const isEven=(number)=>{
    return number % 2 === 0
}

console.log(isEven(2))




const firstChar = (anyString)=>{
    return anyString [0];
}

const findTarget =(array,target) =>{
    for(let i=0; i<array.length;i ++){
        if (array[i]===target){
            return i;
        }
    }

    return -1;
}


  



