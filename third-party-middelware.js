const morgan = require('morgan')
const express = require('express')
const fs = require('fs')

let app = express();
let movies = JSON.parse(fs.readFileSync('./data/movies.json'))


// morgan middelware creayed at the top so can be used for all the routes:
// logging the info about the request made:
app.use(morgan('dev'))

app.get('/api/get_movies',(req,resp)=>{
    resp.status(200).json({
        status :"success",
        count: movies.length,
        data : {
            movies:movies
        }
    })
})

app.listen(5000)


// THIS MIDDELWARE IS USED TO SERVE STATIC FILES PRESENT IN A FOLDER"
// app.use(express.static({folder-path}));