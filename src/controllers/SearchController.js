const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArrray");

module.exports = {
    async index(req,res){
        const { longitude, latitude, techs } = req.query;

        const techsArray = parseStringAsArray(techs);

        console.log(techsArray);

        return res.json({
            devs: []
        })  
    }
}