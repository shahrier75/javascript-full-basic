// callback function 


function myFunc2(){
    console.log("inside my func2")
}



function myFunc(callback){
    console.log("hello there iam shahrier hossain")
    callback()
    
}

myFunc(myFunc2);

