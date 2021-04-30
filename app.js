
var express = require('express');
var app     = express();

app.get('/', function(req,res){
    res.send('Hello Express JS in Bangldesh...');
});

app.listen(3000, function(){
    console.log('Server is running ....');
})

/*
	---- Common Command Lines -----
	npm init -y
	npm start
	nodemon index.js
	npm install express nodemon
	npm uninstall express
*/