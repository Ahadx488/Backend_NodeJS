const express = require('express')

const app = express()

// application level settings
app.set('view engine' ,'ejs')   // Tells Express:“I will use EJS as my template (view) engine”

// routing
app.get('/' , (req,res)=>{
    res.send('home Page')
})

app.post('/api/data',(req,res)=>{    // Handles POST requests; URL: /api/data ; Sends a JSON response
    res.json({
        message : 'data recieved',
        data : req.body
    })
})
// A POST request is an HTTP method used to send data from the client to the server.


app.use((err, req, res, next)=>{   // app.use : Error-handling middleware
    console.log(err.stack)
    res.status(500).send('something went wrong')
})
//Why 4 parameters? This tells Express: “This is an error-handling middleware”

/*
Why app.use(express.json()) is REQUIRED
==>The middleware
//app.use(express.json())
# What it does?
    Reads raw JSON data from request body
    Parses it
    Converts it into a JavaScript object
    Assigns it to req.body
*/

// +++++ IMP +++++++
// earlier => body parser was a separate package
// now => express.json() is built in
// Express does not understand JSON by default because HTTP requests send raw data, and Express is designed to be minimal and requires middleware to parse JSON.