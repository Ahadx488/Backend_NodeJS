function add (a, b){
    return a+b
}

function subtract(a,b){
    return a-b
}
function divide(a,b){
    if(b===0) {
        throw new Error('Divide by zero is not allowed')
    }
    return a/b
}
module.exports ={
    add, subtract, divide
}

// What is the Node module system?

// The Node.js module system is the mechanism that allows you to break your application into separate files (modules) so that they can be easily managed, reused, and maintained.

// In Node.js, a module is just a separate file that contains related code.
// The module system lets you:

// split code into files

// reuse functionality

// avoid polluting the global scope

// Every .js file in Node is a module by default.

// +++++++++++ TYPES OF MODULES ++++++++++++
/* 
1. CORE MODULES (BUILT IN) ==> fs, http, os, path
2. LOCAL MODULES           ==> eg.> math.js
3. THIRD PARTY MODULES     ==> mongoose, express, loadash
*/


// ############## MODULE WRAPPER #############

// (
//     function (exports, require, module, __filename, __dirname){
//         // your module code
//     }
// )


//++++++++++ WHY +++++++++++

/*
Why Module Wrapper is used

    Creates private scope for each file

    Prevents global variable pollution

    Enables require, module.exports

    Provides __filename and __dirname
*/