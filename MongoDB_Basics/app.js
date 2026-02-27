const express = require('express')
const app = express()

// middleware
app.use(express.json())

let books = [
    {
        id : 1,
        title : 'Book1'
    },
    {
        id : 2,
        title : 'Book2'
    },
]

// intro route
app.get('/',(req,res)=>{
    res.json({
        message : 'This is our BookStore API'
    })
})

// get all books
app.get('/get' , (req, res)=>{
    res.json(books)
})

// get a single book

app.get("/get/:id",(req,res)=>{
    const book = books.find(item => item.id === parseInt(req.params.id))
    if(book){
        res.status(200).json(book)
    }else{
        res.status(404).json({
            message : 'Book not found! search another Book'
        })
    }
})

// add new book

app.post('/add',(req,res)=>{
    const newbook = {
        id : Math.floor(Math.random()*1000).toString(),
        title : `Book ${Math.floor(Math.random()*1000)}`
    }
    books.push(newbook)
    res.status(200).json({
        data : newbook,
        message : 'New book added successfully'
    })
    
})

//update book
// .put() is used to update something

app.put('/update/:id' , (req,res)=>{
    const findcurrentBook = books.find(item => item.id === parseInt(req.params.id))
    if(findcurrentBook){
        
        const newTitle = req.body && req.body.title ? req.body.title : findcurrentBook.title;
        
        findcurrentBook.title = newTitle;

        res.status(200).json({
            message : `book with ID ${req.params.id} updated successfully`,
            data : findcurrentBook
        });
    }else{
        res.status(404).json({
            message : "book not found"

        });
    }
});

// delete request

app.delete('/delete/:id' , (req,res)=>{
    const findIndexOfCurrentBook = books.findIndex(item => item.id === parseInt(req.params.id))
    
    if(findIndexOfCurrentBook != -1){
        const deleteBook =books.splice(findIndexOfCurrentBook,1)
        res.status(200).json({
            message : 'Book deleted successfully',
            data : deleteBook[0],
        })
    }else{
        res.status(404).json({
            message : "book not found"

        });
    }
})

const port = 3000
app.listen(port , ()=>{
    console.log(`Server is now running on Port ${port}`)
})


