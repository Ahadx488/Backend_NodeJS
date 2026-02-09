const express = require('express')
 
// This app starts a server and listens on port 3000 for connections. The app responds with "Hello World!" for requests to the root URL (/ ) or route. For every other path, it will respond with a 404 Not Found.

// Calling express() creates an Express application object
    // app is your web server
    // This object handles:
        // routes
        // middleware
        // requests & responses

const app = express()

app.get('/' , (req, res)=>{
    res.send('Hello world')
})

// app.listen()  => starts HTTP server ;Allows your app to receive requests
// creates a Node HTTP server using http.createServer().
    // Without it:
        // No socket
        // No port binding
        // No request–response cycle

const port = 3000
app.listen(port , ()=>{
    console.log(`server is now running at port ${port}`)
})
