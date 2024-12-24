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

app.delete("/", function (req, res) {
    const isThereAtLeastOneUnhealthy = () => {
        return user[0].kidneys.some(kidney => !kidney.healthy);
    };

    if (isThereAtLeastOneUnhealthy()) {
        let atLeastOneUnhealthy = false;
        const newKidneys = [];
        for (let i = 0; i < user[0].kidneys.length; i++) {
            if (user[0].kidneys[i].healthy) {
                newKidneys.push(user[0].kidneys[i]); // Add healthy kidneys to the new array
            } else {
                atLeastOneUnhealthy = true; // Mark that there is at least one unhealthy kidney
            }
        }
        user[0].kidneys = newKidneys; // Update kidneys
        res.json({ msg: "Unhealthy kidneys removed" });
    } else {
        res.status(411).json({
            msg: "You have no bad kidney"
        });
    }
});

function isThereatleastoneunhealthy() {
    let atleastoneunhealthy = false;
    for(let i = 0 ; i<user[0].kidneys.length; i++){
        if(!user[0].kidneys[i].healthy){
            atleastoneunhealthy = true;
        }
    }
    return atleastoneunhealthy;
}

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
