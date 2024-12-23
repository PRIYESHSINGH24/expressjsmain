// steps for the creation of the code in the express 
// creating an https server 
// express 
// node default library => no



const express = require("express");

const app = express();


app.get('/', function(req, res) { // req = request , res = response method
    const n = parseInt(req.query.n); // Convert query param to a number
    const sumResult = sum(n); // Call the sum function
    res.send("Hi, ans is " + sumResult); // Use the correct variable name
})

function sum(n){
    let ans = 0;
    for (let i = 0 ; i <= n ; i++){
        ans = ans+i;
    }
    return ans;
}



app.listen(3000); //this is the creating the server

// we can run iconfig in the laptop to find the dns number of the page for running deployed on the page