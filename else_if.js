const read=require('readline-sync')
var a,b 
a=read.questionInt("Enter your A value")
b=read.questionInt("Enter your B value")
if(a>b)
{
    console.log("A is greater than B")
}
else if(b>a){
    console.log("B is greater than A")
}
else{
    console.log("Equal")
}