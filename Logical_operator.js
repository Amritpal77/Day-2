const read=require('readline-sync')
var a,b 
a=read.questionInt("Enter your A value")
if(a>10 && a<20)
{
    console.log("u between 10 and 20")
}

else{
    console.log("Out of range")
}
b=read.questionInt("Enter B value")
if(a>10||a<20){
    console.log("u r between 10 & 20")
}
else{
    console.log("Out of range")
}