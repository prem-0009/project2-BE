const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");



const FoodSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    cal: { type: Number, required: true, trim: true },
});

module.exports = mongoose.model("Food", FoodSchema);

