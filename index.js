const express = require("express");
const app = express();

const user = [
    {
        name: "PRIYESH SINGH",
        kidneys: [
            {
                healthy: false
            }
        ]
    }
];

app.get("/", function (req, res) {
    const priyesh = user[0].kidneys;
    const numberofkidneys = priyesh.length; // Use 'priyesh' here instead of 'kidneys'
    let numberofhealthykidney = 0;
    for(let i = 0 ; i < priyesh.length ; i++){
        if (priyesh[i].healthy) {
            numberofhealthykidney = numberofhealthykidney + 1;
        }
    }
    const numberofnunhealthykidneys = numberofkidneys - numberofhealthykidney;
    res.json ({
        priyesh,
        numberofhealthykidney,
        numberofnunhealthykidneys,
    })
    res.send(`Number of kidneys of the priyesh: ${numberofkidneys}`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
