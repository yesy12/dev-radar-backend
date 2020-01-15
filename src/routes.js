const { Router } =  require("express");

const routes = Router();

routes.post("/users/", (req,res)=>{
    /*
    { search: 'Alison' }
    req.query


    */
    console.log(req.body);
    res.json({
        message: "Hello Omnistack"
    });
})

module.exports = routes;