const express = require("express");
const app = express();

app.use(express.json());

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
    const numberOfKidneys = priyesh.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < priyesh.length; i++) {
        if (priyesh[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        totalKidneys: numberOfKidneys,
        healthyKidneys: numberOfHealthyKidneys,
        unhealthyKidneys: numberOfUnhealthyKidneys
    });
});

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;

    user[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg: "Kidney added successfully!",
        totalKidneys: user[0].kidneys.length,
        updatedKidneys: user[0].kidneys
    });
});


app.put("/",function(req,res){
    for(let i = 0 ; i < user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req,res){
    const newkidneys = [];
    for(let i = 0 ; i < user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newkidneys.push({
                healthy: true
            })
        }
    }
    user[0].kidneys = newkidneys;
    res.json({msg:"done"})
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
