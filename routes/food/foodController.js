// // ========================================= MILEY VERSION =========================================
// const User = require("../users/userModel");
// const Meal = require("../meals/mealModel");
// const Food = require("./FoodModel");

// module.exports = {
//   addFood: async (req, res) => {

//     try {
//       let foundMeal = await Meal.findById(req.body.meal_id); //---------------find user  
      
//       let newFood = new Food({
//         meal_id: req.body.meal_id,
//         name: req.body.name,
//         cal: req.body.cal,
//       });
//       let savedNewFood = await newFood.save();
      
//       await foundMeal.food.push(savedNewFood); //the food array is in mealModel
//       await foundMeal.save();
      
//       res.status(200).json({savedNewFood, foundMeal});
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   },

//   viewfood: async (req, res) => {
//   res.json(req.body)
//     try {
//       let allUserfood = await Meal.findById(req.body.id)
//         .populate("Food")
//         .select("-password -__v") // exclude  version

//       res.status(200).json(allUserfood.food);
//     } catch (error) {
//       console.log("err", error);
//       res.status(500).json(error);
//     }
//   },

//   deleteByID: async (req, res) => {
//     console.clear()
//     // const _id = req.params.id;
//     console.log(req.params.id);
//     // console.log(id);
//     // console.log(Food)
//     try {
//       let deletedByID = await Food.findByIdAndRemove(req.params.id);

//       res.status(200).json(deletedByID);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   },
// };
