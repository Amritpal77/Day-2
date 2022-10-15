const read=require('readline-sync')
var a 
a=read.question("press 1 for hello. press 2 for hi, press  3 for by")
switch(a){
    case "1":
        {
            console.log("Hello")
            break
        }
    case "2":
        {
            console.log("hiii")
            break
        }
    case "3":
        {
            console.log("By")
            break
        }
    default:
        {
            console.log("Wrong choice")
        }
} 