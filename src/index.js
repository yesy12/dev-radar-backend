const express = require("express");
const app = express();

const port = 8000;

app.use(express.json())


app.post("/users/", (req,res)=>{
    /*
    { search: 'Alison' }
    req.query


    */
    console.log(req.body);
    res.json({
        message: "Hello Omnistack"
    });
})

app.listen(port,()=>{
    console.log(`Running on port ${port}...`)
})