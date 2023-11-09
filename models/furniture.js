const mongoose = require("mongoose")
const furnitureSchema = mongoose.Schema({
    furniture_name: {
        type: String,
        required:[true,"Furniture Name is required"]
    },
    furniture_specification: {
        type:String,
        required:true
    },
    furniture_cost: {
        type: Number,
        required:true
    }
    })
module.exports = mongoose.model("Furniture",furnitureSchema)