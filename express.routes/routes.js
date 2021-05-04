const router = require('express').Router()
//const router = express.Router()

router.get('/login', (req,res)=> {
    res.send('I am from Login Request ...')
})

router.get('/logout', (req,res)=> {
    res.send('I am from Logout Request ...')
})

router.get('/register', (req,res)=> {
    res.send('I am from Register Request ...')
})

module.exports = router