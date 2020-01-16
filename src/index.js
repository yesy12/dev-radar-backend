const express = require("express");
const mongoose = require("mongoose");
const app = express();

const routes = require("./routes");
const port = 8000;

const username = "omnistack";
const password = "Ei1p07ZDM5hDM7Q7";
const db = "omnistack10";
var link = `mongodb+srv://${username}:${password}@cluster0-nth3w.mongodb.net/${db}?retryWrites=true&w=majority`

mongoose.connect(link,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Running on mongodb")
})
.catch((error)=>{
    console.log(`Error on mongodb: ${error}`)
})

app.use(express.json())
app.use("/",routes);



app.listen(port,()=>{
    console.log(`Running on port ${port}...`)
})