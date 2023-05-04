const express = require('express')
const app = express()

// DEVELOPEMENT ENV OF EXPRESS:
console.log(app.get('env'));

// ENVIRONMENT VARIABLES SET BY NIDE-JS:
console.log(process.env)


const port = 3000;
app.listen(port,()=>{
    console.log('server has started.....')
})