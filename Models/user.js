const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GardenArray = new Schema({name:String})
const userSchema = new Schema({
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
       required: true
    },
    password:{
        type: String,
       required: true
    },
    Garden_id:{
        type:[GardenArray],
        default: undefined
    }

})
const User = mongoose.model("User", userSchema)
module.exports = User