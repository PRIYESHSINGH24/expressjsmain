const express = require("express")
const app = express()

let todos = [];
// create a random id for the todo
// extract the todo title from the body
app.post('/',function(req , res){
    todos.push({
        

        title,
        id
    })
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTTPS\index.html')); // Provide the full path to your HTML file
});

app.delete('/', function (req, res){
    // extract the todo 
    // remove the todo
})

app.get('/', function(req , res){
    res.json({
        todos
    })
})


app.listen(3002)




