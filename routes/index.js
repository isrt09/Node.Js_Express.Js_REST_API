var express = require('express');
var app     = express();
var _about  = function(req,res,next){
    console.log('I have allowed to get permission ....');
    next();
}
app.get('/', function(req, res){
    res.send('Welcome to Express JS in '+req.params.country);
});
app.get('/about', _about,function(req, res){
    res.send('I am from About Section ...');
});
app.get('/contact', function(req, res){
    res.send('I am from Contact Section ....');
});

app.listen(4000, function(){
    console.log('Server is running ....');
})