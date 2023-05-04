// PUT HTTP METHOD : WE NEED TO PASS ALL THE FIELDS EVEN IF WE WANT TO UPDATE A RESPECTIVE FIELD
// PATCH HTTP METHOD : ONLY THE DESIRED FIELD WHICH WE NEED TO UPDATE IS PASSED:

const express = require('express')
const fs = require('fs')

let app = express();
let movies = JSON.parse(fs.readFileSync('./data/movies.json'))

app.patch('/api/update_movies/:id',(req,resp)=>{
    // fetching the id of the movie to be updated:
    let id = req.params.id*1;
    // finding the movie to be updated 
    let movieToUpdate = movies.find(ele => ele.id === id);
    if(!movieToUpdate){
        return resp.status(404).json({
            status:"fail",
            message:'Movie with id '+id+' Does not exist'
        })        
    }
    // index of movie to be updated 
    let index = movies.indexOf(movieToUpdate)

    Object.assign(movieToUpdate,req.body);
    // the following 2 objects will be merged i.e the movie to update and the updates send by user i.e stored in body of request
    movies[index] = movieToUpdate;

    // writing the updated data back into the json file:
    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        resp.status(200).json({
            status:"success",
            data:{
                movie:movieToUpdate
            }
        })
    })

})

app.listen(5000)