const { Router } =  require("express");
const axios = require("axios");

const routes = Router();

routes.post("/devs/", (req,res)=>{
    const { github_username } = req.body;



    return res.json({
        message: "Hello Omnistack"
    });
})

module.exports = routes;