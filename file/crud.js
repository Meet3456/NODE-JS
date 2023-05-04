const fs = require('fs')
const path =  require('path')
const pathdirectory = path.join(__dirname,'files')  // __dirname = gives the path to current directory:
const filepath = `${pathdirectory}/test.txt`

// fs.writeFileSync(filepath,"This is a test file")

// READ:

fs.readFile(filepath,'utf-8',(err,item)=>{
    console.log(item)
})

// UPDATE:

fs.appendFile(filepath,' This is the updated text',(err)=>{
    if(!err) console.log("File has been updated")
})

// RENAME:

fs.rename(filepath,`${pathdirectory}/updated_test.txt`,(err)=>{
    if(!err) console.log("file name is updates")
})


// DELETE

fs.unlinkSync()