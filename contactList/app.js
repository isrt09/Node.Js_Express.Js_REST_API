const express      = require('express')
const app          = express()
const morgan       = require('morgan')
const port         = process.env.PORT || 3000
const contactRoute = require('./contactRoute')

app.use(morgan('dev'))
app.use('/contacts',contactRoute)

app.get('*', (req,res)=>{
    res.send(`<h1>404 - Not Found !!!</h1>`)
})
app.listen(port, ()=>{
    console.log(`Server is running at localhost:${port}`);
})