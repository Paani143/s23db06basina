const mongoose = require("mongoose")
const furnitureSchema = mongoose.Schema({
    furniture_name: {
        type: String,
        required:[true,"Furniture Name is required"],
        minlength: "1",
        maxlength: "10"
    },
    furniture_specification: {
        type:String,
        required:true
    },
    furniture_cost: {
        type: Number,
        required:true,
        min:0,
        max:800,
    }
    })
module.exports = mongoose.model("Furniture",furnitureSchema)