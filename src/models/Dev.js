const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: {
        type: String,
        unique: false
    },
    bio: String,
    avatar_url: String,
    techs: [String],
    location : {
        type : PointSchema
    }
})

module.exports = mongoose.model("Dev",DevSchema);