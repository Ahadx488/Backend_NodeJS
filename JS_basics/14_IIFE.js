// // Immediately Invoked Function Expression ( IIFE )

// SUMMARY :

// 1. IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses for wrapping the function and other for execution ()();
// 2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
// 3. IIFE written with function name is named IIFE and not with name are unnamed/anonymous. 
// 4.We can use parameter inside first parentheses.
// 5. To write two or multiple IIFE one should be end with semicolon ;

//It is commonly used to avoid polluting the global namespace or to create a private scope for variables.


(function chai (){                  // named IIFE
    console.log(`DB DISCONNECTED`)
}) ();                               // ()()

// if we dont use semicolon, then it will throw error

( () => {                           // unnamed IIFE
    console.log(`BDDDD`)
}) ();

