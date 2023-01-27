// lexical scope 

function myapp(){
    const myvar="value1"

    
    function myFunc(){


        const myvar="value59"
        console.log("inside myFunc",myvar)
    }
   
   console.log(myvar)
   myFunc()
}
myapp()

