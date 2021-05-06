const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const moment = require("moment");
// const now = moment();


var MealsSchema = new mongoose.Schema({
  mealType: { type: String, required: true },
  food: { type: Array },
  // food: [{ type: mongoose.Schema.ObjectId, ref: "Food" }],
});

module.exports = mongoose.model("Meal", MealsSchema);






