const express = require('express')
const app = express();
const fs = require('fs');
const html = fs.readFileSync('./public/about.html','utf8')


// EXPRESS - MIDDLEWARE
const reqfilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please provide age")      
    }
    else if(req.query.age < 18){
        resp.end("You cannot access this Page")
    }
    else{
        next();
    }
    
}

// APP TO USE THE FOLLOWING MIDDLEWARE:(FOR ALL ROUTES)
// app.use(reqfilter)

app.get('/',(req,resp)=>{
    resp.end(html);
    console.log('A new request has Received');
})

app.get('/about',(req,resp)=>{
    resp.send("Hello , Welcome to About page")
    const age = req.query.age
    console.log(age)
})

app.get('/help',(req,resp)=>{
    resp.send("Hello , Welcome to Help page")
})

app.get('/users',reqfilter,(req,resp)=>{
    resp.send("Hello , Welcome to Users page")
})

app.listen(5000)

// DATA FROM CLIENT - REQUEST:
// DATA SENT BY SERVER - RESPONSE: