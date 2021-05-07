const express      = require('express')
const app          = express()
const morgan       = require('morgan')
const mongoose     = require('mongoose')
const port         = process.env.PORT || 3000
const contactRoute = require('./contactRoute')

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/contacts',contactRoute)
app.set('view engine','ejs')

mongoose.connect(`mongodb+srv://monga:mongaxyz@cluster0.rnyas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{useNewUrlParser: true, useUnifiedTopology: true})
        .then( ()=> {
            app.listen(port, ()=>{
                console.log('SERVER is connected on Database')
            })
        } )
        .catch(e => {
            console.log(e)
        })

let Schema     = mongoose.Schema
let testSchema = new Schema({
    name : String
})
let Test      = mongoose.model('Test', testSchema)

app.get('/', (req,res)=>{
    let post = {
        name    :'React Js',
        brand   : 'Jacob Martin',
        publish : true
    }
    let books=[
        {title:'ttile-1', book:'book-1', author:'author-1'},
        {title:'ttile-2', book:'book-2', author:'author-2'},
        {title:'ttile-3', book:'book-3', author:'author-3'},
        {title:'ttile-4', book:'book-4', author:'author-4'},
        {title:'ttile-5', book:'book-5', author:'author-5'},
    ]
    let test = new Test({
        name: 'MySQL is SQL Database ...'
    })
    test.save()
        .then(t=>{
            res.json(t)
        })
        .catch(e=>{
            console.log(e)
            res.status(500).json({
                error : 'Error Occured...'
            })
        })
    //res.render('pages/index', {title: 'EJS is Template Enginee', post, books, head:'Home'})
})

app.get('/about', (req,res)=>{
    res.render('pages/about', {head:'About'})
})

app.get('/blog', (req,res)=>{
    res.render('pages/blog', {head:'Blog'})
})

app.get('/contact', (req,res)=>{
    res.render('pages/contact', {head:'Contact'})
})

app.get('*', (req,res)=>{
    res.send(`<h1>404 - Not Found !!!</h1>`)
})
// app.listen(port, ()=>{
//     console.log(`Server is running at localhost:${port}`);
// })