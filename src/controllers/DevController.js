module.exports = {
    async store(req,res){
        const { github_username,techs, latitude, longitude } = req.body;
    
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
    
            const location = {
                type: "Point",
                coordinates: [longitude,latitude]
            }
    
    
            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs : techsArray,
                location
            })
        
            return res.json(dev);
        }
    }
}