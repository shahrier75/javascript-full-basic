// filter method 

const number=[1,3,2,6,4,8];

// const isEven=function(number){
//   return number%2===0;
// }

const evenOdd=number.filter((number)=>{
return number %2!==0
})
console.log(evenOdd)