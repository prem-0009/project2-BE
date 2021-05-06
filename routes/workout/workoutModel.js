const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");
// const now = moment();

var WorkoutsSchema = new mongoose.Schema({
  // workouts: [
  //   {
      name: { type: "String", required: true, default: "", trim: true },
      cal: { type: "Number", required: true, default: "", trim: true },
  //   },
  // ],
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Workouts", WorkoutsSchema);
