const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");
const now = moment();

var MealsSchema = new mongoose.Schema({
  meals: [
    {
      mealType: { type: String, required: true },
      food: [
        {
          name: { type: String, required: true, trim: true },
          cal: { type: Number, required: true, trim: true },
        },
      ],
    },
  ],
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Meals", MealsSchema);

// for schema
// meals: [
//   {
//     mealType: { type: String, required: true },
//     food: [
//       {
//         name: { type: String, required: true, trim: true },
//         cal: { type: Number, required: true, trim: true },
//       },
//     ],
//     user_id: { type: Schema.Types.ObjectId, ref: "User" },
//   },
// ],

// for postman input
// {
//     "meals": [
//         {
//             "mealType": "lunch",
//             "food": [
//                 {
//                     "name": "acidepple",
//                     "cal": 1003
//                 }
//             ],
//             "user_id": "606b91687585380302c811b5"
//         }
//     ]
// }
