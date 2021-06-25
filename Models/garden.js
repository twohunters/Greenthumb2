const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const gardenSchema = new Schema({
    title: { type: String, required: true },
})