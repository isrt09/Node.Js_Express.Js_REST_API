const express    = require('express')
const morgan     = require('morgan')
const userRouter = require('./routes')
const port    = 3000 // const PORT = process.env.PORT || 3000

const app     = express()
app.use(morgan('dev'))

app.use('/user',userRouter)

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express from Stack Learner in Bangladesh</h1>')
} )

app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`)
})