// JavaScript is synchronous and single-threaded by default, which means it executes one line of code at a time and one task at a time. Synchronous execution implies that each operation waits for the previous one to complete before moving forward. Because JavaScript is single-threaded, it has only one call stack, so it cannot execute multiple pieces of code in parallel.

// When a JavaScript program runs, an Execution Context is created. The most important one is the Global Execution Context (GEC), which is created first. An execution context is the environment in which JavaScript code is evaluated and executed. JavaScript always executes code line by line, and only one execution context can be active at any moment.

// Each execution context has two phases: the Memory Phase and the Execution Phase. In the memory phase, memory is allocated for variables and functions. Variables declared using let or const are allocated memory (shown as undefined in conceptual diagrams), while function declarations are stored completely in memory. In the execution phase, JavaScript assigns values to variables and executes code line by line.

// JavaScript uses a Call Stack to manage execution contexts. The call stack follows the LIFO (Last In, First Out) principle. When a function is called, a new Function Execution Context is created and pushed onto the call stack. When the function finishes execution and returns a value, its execution context is popped from the stack. Because there is only one call stack, JavaScript can execute only one function at a time, which is why it is called single-threaded.

// JavaScript also has a Memory Heap, which is used to store objects and reference types. Primitive values are handled directly in execution contexts, while objects are allocated in the heap, and references to them are stored in the execution context.

// There are two types of code execution patterns in JavaScript: blocking code and non-blocking code. Blocking code blocks the flow of the program, meaning the next line cannot execute until the current operation finishes. An example is synchronous file reading. Non-blocking code does not block execution; instead, it allows the program to continue running while the operation completes in the background, such as asynchronous file reading or network requests.

// Although JavaScript itself is single-threaded, modern environments like browsers provide Web APIs to handle asynchronous operations. Web APIs include DOM APIs, setTimeout, setInterval, and fetch. When an asynchronous function is called, it is handed off to the Web API environment, allowing the call stack to remain free.

// When an async operation completes, its callback is registered and placed either in the Task Queue (Callback Queue) or the Microtask Queue. Promises (then, catch, finally) go into the Microtask Queue, while callbacks from APIs like setTimeout go into the Task Queue.

// The Event Loop continuously checks whether the call stack is empty. If the call stack is empty, the event loop first moves functions from the Microtask Queue to the call stack. Only after the microtask queue is empty does it move callbacks from the task queue to the call stack. This is why promises execute before setTimeout, even if the timeout is zero.

// In summary, JavaScript executes code using execution contexts managed by a single call stack. Memory is allocated first, code is executed synchronously, and asynchronous behavior is achieved using Web APIs, task queues, microtask queues, and the event loop, all while maintaining single-threaded execution.

/*

JavaScript Engine
┌────────────────────────────────┐
│            Call Stack           │
│                                │
│   Global Execution Context     │
│        ↓                       │
│     Function Calls             │
│                                │
└───────────────┬────────────────┘
                │
                │ async call
                ▼
        ┌────────────────┐
        │    Web APIs     │
        │  (Browser)     │
        │                │
        │ setTimeout     │
        │ fetch          │
        │ DOM APIs       │
        └───────┬────────┘
                │
                │ callback / promise resolved
                ▼
┌─────────────────────────────┐
│        Microtask Queue      │
│   (Promises: then/catch)   │
└───────────────┬─────────────┘
                │
                ▼
┌─────────────────────────────┐
│          Task Queue          │
│ (setTimeout, setInterval)   │
└───────────────┬─────────────┘
                │
                ▼
          ┌───────────┐
          │ Event Loop│
          └─────┬─────┘
                │
(Call Stack empty?)
                │
                ▼
        Callback added back
        to Call Stack

*/



// A Promise represents a value that will be available in the future.

// Task Queue stores callbacks of async tasks like setTimeout, setInterval, DOM events.

// Microtask Queue stores promise callbacks (then, catch, finally).

// Microtask Queue has higher priority than Task Queue

/*
Is Call Stack empty?
   ↓
Yes → Execute Microtask Queue first
   ↓
Then → Execute Task Queue
*/

// The callback of the async operation will be added to the call stack
// only when the call stack becomes empty and the event loop allows it


/* What fetch does

-> Sends a network request (API call)

-> This is a slow operation

-> So JS does NOT wait for it */  // it means it is a async oprn

