const express      = require('express')
const app          = express()
const morgan       = require('morgan')
const mongoose     = require('mongoose')
const port         = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect(`mongodb+srv://monga:mongaxyz@cluster0.rnyas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{useNewUrlParser: true, useUnifiedTopology: true})
        .then( ()=> {
            app.listen(port, ()=>{
                console.log('SERVER is connected on Database successfully')
            })
        } )
        .catch(e => {
            console.log(e)
        })

let Schema     = mongoose.Schema
let testSchema = new Schema({ name : String })
let Test       = mongoose.model('Test', testSchema)

app.get('/', (req,res)=>{    
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
})

app.get('*', (req,res)=>{
    res.send(`<h1>404 - Not Found !!!</h1>`)
})
