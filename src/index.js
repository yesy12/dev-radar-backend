const express = require("expres");
const app = express();

const port = 3000;

app.get("/", (req,res)=>{
    res.send("ok");
})

app.listen(port,()=>{
    console.log(`Running on port ${port}...`)
})