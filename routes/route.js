var express = require('express');
var app     = express();
var router  = express.Router();

app.use(router);

router.get('/', function(req, res){
    res.send('Welcome to Router in Express JS');
})
router.use('/service', function(req,res,next){
    console.log('I am middleware using service');
    res.send('Hi!, I am Mazed!');
    next();
})
router.route('/blog').get(function(req,res){
    res.send('Hi!, I from blog route section ...');
})

app.listen(3000, function(){
    console.log('Server is running');
})

/*
    Router in Express:
    var express = require('express');
    var app     = express();
    var router  = express.Router();
    app.use(router);
    router.use()
    router.get()
    router.route()
*/