const express = require('express')
const fs = require('fs')

let app = express();
let movies = JSON.parse(fs.readFileSync('./data/movies.json'))

// JSON.parse = converts the json data into a JavaScript object

// GET-MOVIES:

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

//express-middelware to get request body (req.body) in the request object
app.use(express.json())

//POST-MOVIES:

app.post('/api/post_movies',(req,resp)=>{
   
    const new_id = movies[movies.length-1].id + 1;
    const newmovie = Object.assign({id:new_id},req.body)
    movies.push(newmovie)
    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        resp.status(201).json({
            status:"success",
            data:{
                movies:newmovie
            }
        })
    })

})


// GET MOVIES: OF A PARTICULAR ID SPECIFIED BY USER:

app.get('/api/get_movies/:id',(req,resp)=>{
    // converting id to int
    const id = req.params.id * 1;

    // finding respective movie based on id parameter
    let movie = movies.find(element=> element.id === id);
    // if no movie is found with the given id:
    if(!movie){
        return resp.status(404).json({
            status:"fail",
            message:'Movie with id '+id+' Does not exist'
        })
    }

    // sending response of that movie with particular id
    resp.status(200).json({
        status:"success",
        data:{
            movie:movie
        }
    })
})

// Find - JS function that iterates over a given array with respect to specified condition
// : -> specified id is a route parameter
// params property is nothing but an object -> route parameters ARE STORED as properties OF PARAM-OBJECT
// INSIDE param objects we have id property -> stores id value as (STRING)