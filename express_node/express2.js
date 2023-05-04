const express = require('express')
const app = express();

const fs = require('fs');
const html = fs.readFileSync('./public/about.html','utf8')

const route = express.Router();

const reqfilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please provide age")      
    }
    else if(req.query.age < 18){
        resp.end("You cannot access this Page , You are underage")
    }
    else{
        next();
    }  
}

route.use(reqfilter);

app.get('/',(req,resp)=>{
    resp.end(html);
    console.log('A new request has Received');
})

app.get('/about',(req,resp)=>{
    resp.send("Hello , Welcome to About page")    
})

//created with route.get -> reFilter will be applied only on this route(middelware)
route.get('/users',(req,resp)=>{
    resp.send("Hello , Welcome to Users page")
})

app.use('/',route);
app.listen(4040)
