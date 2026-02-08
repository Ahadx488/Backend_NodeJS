const firstModule= require('./math')

console.log(firstModule.add(2,3))

console.log(firstModule.subtract(3,2))

try{
    console.log('trying to divide by zero')
    let d = firstModule.divide(10,0)
    console.log(d)
}
catch(error){
    console.log('caught an err:-',error.message)
}


//console.log(firstModule.divide(100,0))

//+++++++++++++ IMP CONCEPT +++++++++++++

// ❌ No try–catch → Node terminates the process

// ✅ With try–catch → graceful error handling

// +++++++++++++++++++++++++++



// ======== NOTES =======


// Node.js Module Export (Short Notes)

// Every .js file in Node.js is a module

// Functions/variables are private by default

// module.exports is used to expose code to other files

// add() is a normal function

// module.exports = add exports the function

// require() receives the exported function