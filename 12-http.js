
const http = require('http')

//req = incoming request
//res = send back
const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.end('Welcome to our home page');
    
    }else if(req.url === "/about"){
        res.end('Here is the about page');
 
    }else{
        res.end(`<h1>Oopps! 404</h1><a href="/">Back home</a>`)

    }
 
})
server.listen(5000);




