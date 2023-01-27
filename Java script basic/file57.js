// map mathod 

const number=[3,6,4,1,8]


// const square=function(number){
//     return number*number;
// }

const squareNumber=number.map((number,index)=>{
    return `index:${number},${number*number}`;
})

console.log(squareNumber)
