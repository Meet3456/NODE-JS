const mongoose = require('mongoose')
const express = require('express')
let app = express();
// CONNECTION TO THE DATABASE:
mongoose.connect('mongodb://0.0.0.0:27017/e-commerce');

// CREATING THE GENERAL SCHEMA:
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
});


app.use(express.json)


app.get("/search/:key", async (req,resp)=>{
    const Product = mongoose.model('products',productSchema);

    console.log(req.params.key);

    let data = await Product.updateOne(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}

            ]
        }
    )
})


app.listen(6000)