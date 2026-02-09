//JS is used to change html&css of browser or website dynamically at any time
// we dont need to convert it manually
console.log("Abdul Ahad")
//JS is weakly typed language
//C C++ java are stronlgy typed languages
/* eg. var name="Abdul" here no datatype is used like we use in C++ (int string) var name=20 ; var name=19.90 ; these are defined data types, we are assigning any data like integer, decimal, string to name using var, we dont need to use specific data types; 
also there is something called undefined datatype, var name; we dont assign anything to it, it will threw error like "undefined"*/
// var provides flexibility but can be cause of errors some times
/* flexibility:- var name="Abdul";
                     name=20;
                     name=true;
                     */

var score=100;
var avg=40.5;
var name="pppp";
var booli=true;
//score="good";
console.log("score:",score);
console.log("average:",avg);
console.log("name:",name);
console.log("status:",booli);
score="good";
console.log("newscore:",score);
// Dynamic type conversion
var a=5;var b=6;
var sum=a+b;
console.log(sum);
var c='hello';
var add=a+c;
console.log(add);//output-> 5hello 
//here 5 is automatically typecasted to string from integer
var prod=a*c;
console.log(prod);//output->NaN as 'a' is number and 'c' is string
var d="6"; // here 'd' is string, whenever string and number is getting added , the final output will be string, 
console.log(a+d);// output-> '56' 
console.log(a*d);// output-> 30; here 'd' is typecasted to integer, whenever we take product of string and number, number will get high priority;and string gets converted to number if possible
var e='e';
console.log(a*e);