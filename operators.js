/* /////Operator:-To perform an operations is called operator
1. Arithmetic operrator:- +,-,*,/,%
2. Relationl operator:- >,<,>=,<=,==,!=
3. Assignments operator:- =,+=,-=,*=,/=,%=
4. Logical Operator:- &&, ||, !
=== is dtrict comparison, strictly cares about the data type 
== is simple comparison, doesnot care about the data type
*****name of the variable is known as operand*****
/////Conditon Statements:- Decision statements
1. if
2. if else
3. else if
4. nested if else
5. Switch


Logical operator
Relational operator 
Boolean operator
optional statement

break:- execution statement
continue:- skip
goto:- jump statement
*/


const read=require('readline-sync')
var a,b 
a=read.questionInt("Enter your A value")
b=read.questionInt("Enter your B value")
if(a>b)
{
    console.log("A is greater than B")
}