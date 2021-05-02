// Date : 15 April, 2021 || Author : Mazedur
// Ex : 01
var http   = require('http');
var server = http.createServer(function(req,res){
    res.end('Welcome to Node JS Dhaka,Bangladesh');
});

server.listen(4040);
console.log('Server Run Successfully!');

// Ex : 02 
var http   = require('http');
var server = http.createServer(function(req,res){
    if(req.url == '/'){
      res.writeHead(200,{'Content-Type': 'text/html'})
      res.write('<h1>This is home Page<h1>')
      res.end();
    }else if(req.url == '/about'){
      res.writeHead(200,{'Content-Type': 'text/html'})
      res.write('<h1>This is About Page<h1>')
      res.end();
    }else if(req.url == '/contact'){
      res.writeHead(200,{'Content-Type': 'text/html'})
      res.write('<h1>This is Contact Page<h1>')
      res.end();
    }
});

server.listen(4040);

// Ex : 03
npm init --y

// Ex : 04
const { write } = require('fs');
var http   = require('http');
var url    = require('url');
var server = http.createServer(function(req,res){
    var myURL = "https://rabbil.com/blog.html?year=2020&month=july";
    var objURL = url.parse(myURL,true);
    var hostName = objURL.host;
    var pathName = objURL.pathname;
    var search   = objURL.search;
    res.writeHead(200,{'content-type' : 'text/html'});    
    res.write(hostName);
    res.write(pathName);
    res.write(search);
    res.end()
});

server.listen(4040);
console.log('Server Run Successfully!');
 
// EX : 05 FS Module Asyncrhronous
var fs     = require('fs');
var http   = require('http');
var server = http.createServer(function(req,res){
    if(req.url == '/'){        
        fs.readFile('Home.html',function(error, data){
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        });
    }
});

server.listen(3030);
console.log('Server Runs fine!!');

// EX : 06 FS Module Syncrhronous       
var fs     = require('fs');
var http   = require('http');
var server = http.createServer(function(req,res){
    if(req.url == '/'){        
        let mydata = fs.readFileSync('Home.html');
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write(mydata);
        res.end();
    }
});

server.listen(3030);
console.log('Server Runs fine!!');

// EX : 06 FS Write Module Asyncrhronous      
var fs     = require('fs');
var http   = require('http');
var server = http.createServer(function(req,res){
    if(req.url == '/'){
        //Asyncrhronous      
        fs.writeFile('test.txt','Welcome to Node JS Bangladesh',function(error){
            if(error){
                res.writeHead(200, {'content-type' : 'text/html'});
                res.write('File Write Failed!');
                res.end();
            }else{
                res.writeHead(200, {'content-type' : 'text/html'});
                res.write('File Write Success');
                res.end();
            }
        })                 
    }
});

server.listen(3030);
console.log('Server Runs fine!!');

// EX : 07 FS Write Module Syncrhronous 
var fs     = require('fs');
var http   = require('http');
var server = http.createServer(function(req,res){
    if(req.url == '/'){
        //Asyncrhronous      
        let data = fs.writeFileSync('demo.txt','Welcome to Syncrhronous Programming');
            if(data){                
                res.writeHead(200, {'content-type' : 'text/html'});
                res.write('File Write Failed!');
                res.end();
            }else{
                res.writeHead(200, {'content-type' : 'text/html'});
                res.write('File Write Success');
                res.end();
            }        
    }
});

server.listen(3030);
console.log('Server Runs fine!!');



// Ex : 08 FS Delete Module Syncrhronous
var fs     = require('fs');
var http   = require('http');
var server = http.createServer(function(req,res){
    if(req.url == '/'){
         let output = fs.unlinkSync('test.txt');
         if(output){
                res.writeHead(200, {'content-type' : 'text/html'});
                res.write('File Delete Failed!');
                res.end();
         }else{
                res.writeHead(200, {'content-type' : 'text/html'});
                res.write('File Delete Success!');
                res.end();
         }

    }
});

server.listen(3030);
console.log('Server Runs fine!!');

// Ex : 09 FS Write Module Asyncrhronous
var fs     = require('fs');
var http   = require('http');
var server = http.createServer(function(req,res){
    if(req.url == '/'){
         fs.unlink('bangladesh.txt',function(error){
             if(error){
                res.writeHead(200, {'content-type' : 'text/html'});
                res.write('Sorry! File Failed to Delete!');
                res.end();
             }else{
                res.writeHead(200, {'content-type' : 'text/html'});
                res.write('File Delete Successfully!');
                res.end();
             }
         });
    }
});

server.listen(3030);
console.log('Server Runs fine!!');

// Ex : Express JS - 01 Response Method
const express = require('express')
const app = express();

// Response get Method
app.get('/', function(req, res){
    res.send('Hello Express JS');
});

// Response post Method
app.post('/about', function(req, res){
    res.send('Hello About Page');
});
// Response put Method
app.put('/blog', function(req, res){
    res.send('Hello Blog Page');
});

// Response delete Method
app.delete('/contact', function(req, res){
    res.send('Hello Contact Page');
});

// String Response
app.get('/career', function(req, res){
    res.end('This is demo text version ...');
});

// Status Response
app.get('/service', function(req,res){
    res.status(401).end('Unauthorized user');
})

// JSON Response
app.get('/json', function(req,res){
    let data =  [
        {
            name : 'IBCS-PRIMAX',
            age  :  '35',
            dob  :  '20-11-1985'
        },
        {
            name : 'IBCS-PRIMAX',
            age  :  '55',
            dob  :  '10-11-1985'
        },
        {
            name : 'IBCS-PRIMAX',
            age  :  '45',
            dob  :  '23-11-1985'
        },
    ]
    res.json(data);
})

// Response Download
app.get('/test', function(req,res){
    res.download("./upload/image.jpg");
})

// Port Setup
app.listen(7000, function(){
    console.log('Server run success...');
})



// EX 02 : Express JS - Request Method

const express = require('express')
const app = express();

// Request Query
app.get('/', function(req,res){    
    let fname = req.query.firstName;
    let lname = req.query.lastName;
    res.end('Your Full Name:'+fname+" "+lname);
})

// Request Header
app.get('/', function(req,res){    
   let firstName = req.header("firstName");
   let lasstName = req.header("lastName");
   res.end(firstName+ " "+ lasstName);
})

// Request GET
app.get('/', function(req,res){
    res.send('this is simple post response ...');
})

// Request POST
app.post('/', function(req,res){
    res.send('this is simple post response ...');
})

// Request POST with Query
app.post('/', function(req,res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName+" "+lastName);
})

// URL Port Setup
app.listen(7000, function(){
    console.log('Server run success...');
})

// Request JSON using npm body-parser package

const express  = require('express')
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Request JSON using body-parser

app.post('/', function(req,res){
    let jsonData   = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.send(jsonString);
})

app.post('/', function(req,res){
    let jsonData   = req.body;
    let name       = jsonData['name'];
    let age        = jsonData['age'];
    let district   = jsonData['district'];
    res.send(name+' '+age+' '+district);
})
// URL Port Setup
app.listen(7000, function(){
    console.log('Server run success...');
})

// Request JSON using npm multer [npm install --save multer]
// File Upload
var  express  = require('express');
var  multer   = require('multer');

var app    = express();
var multer = multer();

app.use(multer.array());
app.use(express.static('public'));

// Request JSON using npm multer

app.post('/', function(req,res){
    
    let JSONData = req.body;
    res.send(JSON.stringify(JSONData));
    
})
// URL Port Setup
app.listen(7000, function(){
    console.log('Server run success...');
})

// Request File Upload using npm multer
var  express  = require('express');
var  multer   = require('multer');

var app     = express();
var storage = multer.diskStorage({
    destination : function(req, file, callBack){
        callBack(null, './upload');
    },
    fileName : function(req, file, callBack){
        callBack(null, file.originalname)
    }
});

var upload = multer({storage:storage}).single('myfile');

app.post('/', function(req, res){
    upload(req, res, function(error){
        if(error){
            res.send('File Upload Failed ...');
        }else{
            res.send('File Upload Success ...');
        }
    });
});
// URL Port Setup
app.listen(7000, function(){
    console.log('Server run success...');
})













