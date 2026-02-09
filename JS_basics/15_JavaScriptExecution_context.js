// JS execution context
// 1. Global execution Context
// 2. Function execution context
// 3. Eval execution context


// JavaScript executes code using execution contexts. First, a global execution context is created with memory and execution phases. For every function call, a new execution context is created, executed, and then removed from the call stack.

// JavaScript is single-threaded because it has only one call stack and can execute only one execution context at a time. Each function call creates a new execution context that is pushed onto the call stack and removed after execution.

// ============= Execution Context – Summary =============

// Execution Context is the environment in which JavaScript code is executed.

// JavaScript first creates a Global Execution Context (GEC) when a program starts.

// Every execution context has two phases:

// Memory Phase (Creation Phase)

// Execution Phase

// Global Execution Context (GEC)

// Created once when the program starts.

// In the memory phase:

// Variables are allocated memory and set to undefined

// Function declarations are stored completely

// In the execution phase:

// Code is executed line by line

// Values are assigned to variables

// this is created in GEC

// Browser → window

// Node.js → {}

// Function Execution Context (FEC)

// Created every time a function is called

// Also has:

// Memory Phase (parameters & local variables → undefined)

// Execution Phase (code runs, values assigned)

// After return, the function execution context is destroyed

// Call Stack

// JavaScript uses a single call stack

// Execution contexts are pushed onto the stack when created

// After execution, they are popped from the stack

// Only the top execution context runs at any time

// Important Points

// JavaScript is single-threaded

// Only one execution context executes at a time

// Each function call creates a new execution context

// Same function called multiple times → multiple execution contexts

// Memory allocation always happens before execution

// One-line conclusion ✍️

// JavaScript executes code using execution contexts, where memory is allocated first and then code is executed, with function calls managed using a single call stack.

// ====== CALL STACK ======
// ->Now we explore call Stack.

// It is like stack .

// First at first at the bottom there is Global EC and further the function EC context are coming as they need to execute and after executing its EC it exit from the stack.

// Here Function EC come in LIFO fashion(Last in First Out)  in call Stack


// ++++++++++++++ FLASY/ TRUTHY ++++++++++++++++=

// false , 0, -0, NaN, undefined, null, BigInt 0n, ""  ==> all these are falsy value means if we use them in if(....) the are assumed false;

// truthy values ==> "0" , [], 'false' , " " , {} , function(){}

