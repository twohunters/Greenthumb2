const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PlantSchema = new Schema({name:String})
const gardenSchema = new Schema({
    title: { type: String, required: true },
    user_id: { type: String, required: true },
    plants:{
        type:[PlantSchema],
        default: undefined
    }
})