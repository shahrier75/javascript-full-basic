// important array method 

const numbers=[4,2,5,8];

function myFunc(number,index){
    // console.log("index is ",index)
    console.log(`${number}*2=${number*2}`)
}

// for (let i=0; i<numbers.length; i++){
//      multiplyBy2([i],i)

// }

numbers.forEach(myFunc)

