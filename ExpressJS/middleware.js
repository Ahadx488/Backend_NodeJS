// Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

// Middleware functions are functions that have access to the request object ( req ), the response object (res ), and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next

// Middleware functions can perform the following tasks:
// • Execute any code.
// • Make changes to the request and the response objects.
// • End the request-response cycle.
// • Call the next middleware function in the stack.
// If the current middleware function does not end the request-response cycle, it must call next) to pass control to the next middleware function. Otherwise, the request will be left hanging.

// in simple words ==> Middleware = functions that sit in the request pipeline and control how a request is processed before reaching the final route.

/* Express supports:
// application middleware → runs on all routes
// route middleware → runs on specific routes
// built-in middleware → JSON parser, static files
// error middleware → handles crashes
*/



const express  = require('express')
const app = express()

// define middleware function

const myMiddleware1 = (req , res , next)=>{
    console.log('this 1st middleware will run on every request')

    next(); // next() = pass control to the next middleware :: If you don’t call next(), the request stops there.
}

app.use(myMiddleware1)

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.listen(3000,()=>{
    console.log(`server is now running on port 3000`)
})

// When next() is commented out in a middleware and no response is sent, the request gets stuck inside that middleware. Express processes requests in a pipeline, and each middleware must either send a response or pass control to the next handler using next(). If neither happens, Express assumes the request is still being handled, so it does not move to the route handler like app.get(). As a result, the server keeps waiting, and the browser shows a loading or connection issue. Therefore, we cannot omit next() in middleware unless the middleware itself ends the request–response cycle.

//Express is designed as a request–response pipeline, where every incoming request passes through a sequence of middleware functions before reaching the final route handler. When next() is commented out in a middleware and no response is sent, the request becomes stuck at that middleware because Express waits for the current handler to finish its job. Since the middleware neither ends the request nor passes control forward, Express cannot move to the next middleware or the route (app.get()), causing the browser to keep loading. Therefore, in a pipeline-based design like Express, each middleware must either send a response or call next() to allow the request to continue.
