var express = require('express');
var hbs     = require('express-handlebars');
var app     = express();

app.engine('hbs',hbs({ defaultLayout: "", layoutsDir: "",}));
app.set('views','./views');
app.set('view engine','hbs');

app.get('/test', function(req, res){
    res.render('test',{
        name:'Mazedur Rahman',
        age : 35
    });
})
app.get('/', function(req,res){
    res.send('Hello EJS in Bangldesh...');
});

app.listen(3000, function(){
    console.log('Server is running ....');
})