// // // Fetch API – Internal Working (Short Note)

// // // When fetch(url) is called, it immediately returns a Promise object and the request is handed over to the browser or Node.js environment, not handled directly by JavaScript. JavaScript continues executing other code while the network request runs in the background.

// // // The actual network request is performed by Web APIs (in browser) or Node internals (in Node.js). Once the request completes, the promise is either fulfilled or rejected based on the result of the network operation.

// // // If the request is successful, the promise is fulfilled and the resolved data is passed to the onFulfilled callback (attached using .then() or await). If the request fails, the promise is rejected and the error is passed to the onRejected callback (handled using .catch() or try/catch).

// // // The response object returned by fetch is stored in memory immediately, but it is populated with actual data only after the network request completes. The promise settles only once and then triggers the appropriate callback through the event loop.

// // Fetch treats HTTP errors like 404 as successful promise resolutions, and only rejects the promise for network failures.

/*fetch rejects ONLY when:

// 1. No internet

// 2. DNS failure

// 3. Connection timeout

// 4. CORS failure

// 5. Request never reached server

 📌 These are network-level failures  */


 /*



 fetch(url)
 |
 |  (request sent)
 v
┌───────────────────────────┐
│   Browser / Node (Web API)│
│     Network Request       │
└─────────────┬─────────────┘
  |
┌───────────┴───────────┐
|                       |
Network Success         Network Failure
(Server responded)      (No internet, DNS,
       timeout, CORS)
|                       |
v                       v
Promise RESOLVED        Promise REJECTED
|                       |
v                       v
then() / onFulfilled      catch()
|
|
┌──────┴───────────────┐
|  HTTP Status Check   |
|---------------------|
| 200, 201 → OK       |
| 404, 500 → ERROR    |
└──────┬──────────────┘
|
response.ok === false
|
v
(Developer must throw error)
|
v
catch()

*/
