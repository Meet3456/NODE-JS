const mongoose = require('mongoose')

// CONNECTION TO THE DATABASE:
mongoose.connect('mongodb://0.0.0.0:27017/e-commerce');

// CREATING THE GENERAL SCHEMA:
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
});


// ADDING DATA IN THE DATABSE(CREATE):
const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "i-phone",
        price: 500,
        brand: 'apple',
    });
    const result = await data.save();
    console.log(result);
}
//saveInDB()


// UPDATING THE DATA IN THE DB(UPDATE):
const updateInDB =async  () => {
    const Product = mongoose.model('products', productSchema);
    let data =await  Product.updateOne(
        { brand: "apple" },
        {
            $set: { price: 550,name:'apple 12 pro max' }
        }
    )
    console.log(data)
}
//updateInDB()


// DELETE DATA:
const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'i-phone'})
    console.log(data);
}
//deleteInDB()\


// FIND DATA:
const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({name:'oppo-A55'})
    console.log(data);
}
//findInDB()