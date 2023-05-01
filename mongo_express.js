const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();     // connecting to client-which is node-js
    let db = result.db('e-comm');           // connecting to desired Database
    let collection = db.collection('produts');   // connecting to desired collection
    let response = await collection.find({}).toArray();
    console.log(response);
}


getData();
