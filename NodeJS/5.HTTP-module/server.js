// http.createServer() is not a Promise; it uses a callback function that is executed for every incoming HTTP request.
const http = require('http')


const server = http.createServer((req, res)=>{
    
    console.log(req, 'req')
    res.writeHead(200 , {'Content-Type' : 'text/plane'});
    res.end('Hello node js from http module');

})

const port = 3000;
server.listen(port , ()=>{
    console.log(`server is now listening to port ${port}`)
})

// This code demonstrates how to create a basic HTTP server using the built-in http module in Node.js. The http module allows Node.js to handle web requests and responses without installing any external libraries. It is commonly used to build lightweight servers or to understand how web servers work at a low level.

// The server is created using the http.createServer() method, which takes a callback function as an argument. This callback function is executed every time a client sends an HTTP request to the server. The callback receives two objects: req, which contains information about the incoming request such as the URL, method, and headers, and res, which is used to send a response back to the client.

// Inside the callback, the request object is logged to the console for debugging purposes. The server then sets the HTTP response status code to 200, indicating a successful request, and specifies the response type as plain text using the Content-Type header. After setting the headers, the res.end() method is used to send a response message to the client and close the connection.

// The server is configured to listen on port 3000 using the server.listen() method. Once the server starts successfully, a confirmation message is printed in the terminal. After this, the server continuously listens for incoming requests and responds with the same message each time a request is received.


// ============= IMP NOTES ==============


// HTTP handles requests from clients (such as browsers, apps, and APIs) to servers, which then respond with data.