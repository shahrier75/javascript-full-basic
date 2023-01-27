// reduce method 

// const numbers=[1,3,4,6  ,10]

// const sum=numbers.reduce((accumulator,currentValue)=>{

// return accumulator+currentValue;
// })
// console.log(sum)



const userCard=[
    {productId:1,productName:"Mobile",price:12000},
    {productId:2,productName:"Laptop",price:22000},
    {productId:3,productName:"TV",price:32000}
]


const totalAmount=userCard.reduce((totalPrice,currentProduct)=>{
   return totalPrice+currentProduct.price
},0)

console.log(totalAmount)





