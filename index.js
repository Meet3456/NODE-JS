const express = require('express')

// connecting to the database using mongoose:
require('./config')
// importing the model from products:
const Product = require('./products');

let app = express();
app.use(express.json)


app.get("/list",async (req,resp)=>{
    let data = await Product.find();
    resp.send(data);
})


app.post("/create",async (req,resp)=>{

    let data = new Product(req.body);
    let result = await data.save();
    console.log(req.body)
    resp.send(result)
})


app.delete("/delete/:_id",async (req,resp)=>{
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})


app.patch("/update/:_id",async (req,resp)=>{
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        {
            $set : req.body
        }
    );
    resp.send(data)
})
app.listen(3000)