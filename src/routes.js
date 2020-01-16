const { Router } =  require("express");
const axios = require("axios");
const Dev = require("./models/Dev");

const routes = Router();

routes.post("/devs/", async (req,res)=>{
    const { github_username,techs } = req.body;

    const usuarioExiste = await Dev.findOne({github_username})

    if(usuarioExiste){
        return res.json({
            "error" : "Dev já esta cadastrado"
        })
    }
    else{

        const link = `https://api.github.com/users/${github_username}`;
        const response = await axios.get(link);
    
        let { name = login, avatar_url, bio } = response.data;
    
        const techsArray = techs.split(",").map(tech => tech.trim())
    
        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs : techsArray
        })
    
        return res.json(dev);
    }
})

module.exports = routes;