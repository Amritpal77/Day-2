const read=require('readline-sync')
var a
a=read.questionInt("Enter any no to check odd or even")
if(a>400 && a<500){
    if(a%2==0){
        console.log("Even")
    }
    else{
        console.log("odd")
    }
}
else{
    console.log("out of range, please enter your value between 400 &  500")
}