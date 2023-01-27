// // sort method  
// ASCII TABLE
// char:ascii table



// sort  

// 5,9,1200,400,3000
// 5,9,400,1200,3000

// const userNames=["shahrier","abcd","rabbi"]

// userNames.sort();
// console.log(userNames);




// const numbers=[5,9,1200,400,3000];

// // numbers.sort((a,b)=>{
// //     return a-b;
// // });
// numbers.sort((a,b)=>a-b) //arrow function
// console.log(numbers);


// Low to High High to low 

const products=[
    {productId:1,productName:"Mobile",price:12000},
    {productId:2,productName:"Laptop",price:22000},
    {productId:3,productName:"AC",price:32000},
    {productId:4,productName:"Fan",price:2000},
    {productId:5,productName:"Sound Box",price:3000},
    {productId:6,productName:"Desktop",price:50000},
]

// const lowtoHigh=products.slice().sort((a,b)=>{
//     return a.price-b.price
// })

const hightoLow=products.slice().sort((a,b)=>{
    return b.price-a.price
})


console.log(hightoLow)