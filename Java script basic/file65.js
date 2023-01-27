// splice method 

const myArray=[`iteam1`,`iteam2`,`iteam3`]


// myArray.splice(1,1)

// myArray.splice(1,0,"inserted iteam")

const deletedIteam=myArray.splice(1,2,`inserted iteam1`,`inserted iteam2`);
console.log("deletedIteam",deletedIteam)
console.log(myArray)


