const express = require('express')
const { get } = require('http')
const app = express()


// root route

app.get('/' , (req, res)=>{
    res.send('Welcome to our HomePage')
})

const port =3000

app.listen(port , ()=>{
    console.log(`'Server is now running at port ${port}'`)
})

app.get('/products' , (req,res)=>{
    const products = [
        {
            id : 1,
            label: 'Product 1'
        },
        {
            id : 2,
            label: 'Product 2'
        },
        {
            id : 3,
            label: 'Product 3'
        }
    ]
    res.json(products)   //res.json() sends data to the client in JSON format and ends the response.
})  

// ====== get a single product ========

app.get('/products/:id', (req,res)=>{
    console.log("req.params",req.params)

    const productId = parseInt(req.params.id)  
    const products = [
        {
            id : 1,
            label: 'Product 1'
        },
        {
            id : 2,
            label: 'Product 2'
        },
        {
            id : 3,
            label: 'Product 3'
        }
    ]
    const getsinlgeProduct = products.find(product => product.id === productId)
    
    if(getsinlgeProduct){
        res.json(getsinlgeProduct)
    }else{
        res.status(404).send('product not found! please try another product')
    }
})


// ================== IMP +++++++++++++

// parseInt() converts a string value from URL parameters into an integer so it can be compared with numeric data.
/*
Client Request
   |
   |  GET /products/2
   ↓
Express Server
   |
   |  matches route: /products/:id
   ↓
req.params.id = "2"   (string)
   |
   |  parseInt()
   ↓
productId = 2   (number)
   |
   |  search in products array
   ↓
Product found?
   |            |
  Yes           No
   |            |
res.json()   res.status(404)
   |            |
Response     "Product not found"

*/

// ===========  ends ===============






// short summary 👇

// You create an Express server using express().

// Each app.get() defines a separate route (URL).

// / is the root route → returns a homepage message.

// /products is another route → returns product data as JSON.

// Routes are independent, not nested inside each other.

// Express checks the URL and runs the matching route handler.

// This is how a backend serves different responses for different URLs.

// 👉 One server, multiple routes, each route does one specific job.

// ######### req.params #############
// req.params is used to read values from the URL path (route parameters).
/*
Express sees route:

/user/:id

   -> :id means → variable

   -> Value from URL is captured

   -> Stored inside req.params
*/