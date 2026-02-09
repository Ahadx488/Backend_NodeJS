let score = 33;
console.log(typeof score);
// This gives the number in the console
let score1 = "33";
let scoreInNumber = Number(score1);
console.log(scoreInNumber);
console.log(typeof scoreInNumber);

let score2="33abc"
let score2Inumber= Number(score2)

console.log(typeof score2Inumber) // gives number in console
console.log( score2Inumber)      // gives NaN in console   // problem of JS

// conversion 
// Number (...)
// Boolean  => Boolean( 1) true  ; Boolean("") => false ; Boolean("xyz")=> true
// String(..) => String(33 ) => converted to string type


// ************** OPERATIONS *******************

//console.log(2**3) // 2^3
console.log( "1" +2 +2) // 122
console.log(1+ 2 + "2") // 32


console.log( 2>1) // true
console.log( "2" >1) // true   here JS converts string to number and then compare

console.log( null>0) // false     
console.log(null == 0) // false
console.log( null >= 0) // true   Comparision converts null to 0 and then compare ; equality check and conversion operator works differently
 
// avoid these type of weird camparisions


// === not just values but also checks data types ; strict opearator

// Premitive DataTypes { call by value}
// 7 types : String , Number , null , undefined , Symbol , Boolean , BigInt

// Non-Premitive / Referance DataTypes 
// Arrays , Objects , Functions 

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
 

// Type                                   typeof

// i)               Object                                object
// ii)              Array                                  object
// iii)             Function                            function(object)



// ========================== * MEMORY * ==========================
// Stack( we get copy of value) , Heap( we get reference of value)
// Premitive ( Stack) , Non-Premitive ( Heap)


