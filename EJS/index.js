// EJS (Embedded JavaScript) is a template engine used with Express to generate dynamic HTML pages by embedding JavaScript inside HTML.
/*
Why EJS is used
    ->To send dynamic data from server to HTML
    ->To avoid writing static HTML pages
    ->To render pages using server-side data (user info, lists, etc.)

How EJS works (flow)
    ->Client requests a page
    ->Express route calls res.render()
    ->EJS injects data into an .ejs file
    ->Final HTML is sent to the browser
*/


const express = require('express')
const path = require('path')

const app = express()

//set the view engine as ejs
app.set('view engine' , 'ejs')  // This tells Express:“When I call res.render(), use EJS to render the page.”

// set the directory for the views
app.set('views' , path.join(__dirname , 'views'))  // This tells Express:“All .ejs files are inside the views/ folder.”

const products  = [
    {
        id : 1,
        title : 'product 1'
    },
    {
        id : 2,
        title : 'product 2'
    },
    {
        id : 3,
        title : 'product 3'
    }
];

app.get('/',(req,res)=>{
    res.render('home' , {title : 'Home', products : products})
})
/*
What happens here
    ->Browser requests /
    ->Express matches this route
    ->res.render('home', ...) is called
Express:
    ->loads views/home.ejs
    ->injects title and products
    ->EJS generates final HTML
    ->HTML is sent to browser
*/

app.get('/about' , (req,res)=>{
    res.render('about' , {title : 'About Page'})
})

const port = 3000
app.listen(port , ()=>{
    console.log('server is running')
})