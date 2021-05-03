const express = require('express')
const app     = express()
const morgan  = require('morgan')
const port    = 3000 // const PORT = process.env.PORT || 3000

function customMiddleware(req, res, next){
    if(req.url == '/about'){
        res.send('<h1>This page is blocked by Administrator....<h1>')
    }
    next()
}

// Tinnylogger Midlleware or multiple middleware
function tinnyLogger(){
    return () => {
        console.log(`${req.method} - ${req.url}`)
    }
}

const middleware = [customMiddleware, tinnyLogger()]

app.use(customMiddleware)
//app.use(morgan('dev'))

app.get('/contact', (req, res)=> {
    //res.send('<h1>I am from Contact Section<h1>')
    res.json({
        'name':'Mazedur'
    })
})

app.get('/service', morgan('dev'), (req, res)=> {
    res.send('<h1>I am from Service Section<h1>')
})

app.get('/about', (req, res)=> {
    res.send('<h1>I am from About Section<h1>')
})

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express from Stack Learner in Bangladesh</h1>')
} )

app.get('*', (req,res)=> {
	res.send('<h1>404 Not Found <h1>')
})

app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`)
})