const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const plantSchema = new Schema({
    name:{
         type: String,
        required: true
    },
    description:{
         type: String 
    },
    plant_habit:{
         type: String
    },
    life_cycle:{
         type: String
    },
    sun_req:{
         type: String
    },
    water_req:{
         type: String 
    },
    uses:{
         type: String
    },
    edible_parts:{
         type: String
    },
    time_to_fruit:{
         type: String
    },

}
);

const Plant = mongoose.model("Plant", plantSchema)
module.exports = Plant