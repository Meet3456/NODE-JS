
const app = require('./app')
var a = 10;
var b = 20;
//console.log(a+b)

// '==' : Does the type conversion of operands before comparision
// '===' : Compares the value as well as Data Type of operands.

// var x = '20';
// if(x===20){
//     console.log("matched")
// }
// else{
//     console.log("Not-matched , Data-types are not equal")
// }

/*
console.log(app)
console.log(app.x)
console.log(app.name)
console.log(app.z())    returning a function imported from app
*/

// CREATING A SERVER:

/* 
const http = require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>Good Morning!</h1>");
    resp.end();
}).listen(3000);
*/

//
const colors = require('colors');
console.log("Hello,meet vasa - Good Morning".blue)


// API TESTING:

const http = require('http')
const data = require('./data')
http.createServer((req,resp)=>{
    resp.writeHead(201,{'content-Type':'application\json'});
    resp.write(JSON.stringify(data))
    resp.end()
}).listen(5000)



