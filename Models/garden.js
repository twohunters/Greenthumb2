const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const PlantSchema = new Schema({name:String})
const gardenSchema = new Schema({
    title: { type: String, required: true },
    user_id: { type: String, required: true },
    size: {type: String},
    plants: [{
        type: String, require:true
    }],
    plant_id:[{
        type: String 

    }],
})
const Garden = mongoose.model("Garden", gardenSchema)
module.exports = Garden