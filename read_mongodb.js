const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();     // connecting to client-which is node-js
    let db = result.db('e-commerce');           // connecting to desired Database
    return db.collection('produts');   // connecting to desired collection

}

getData();