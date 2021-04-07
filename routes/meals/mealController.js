// ========================================= MILEY VERSION =========================================
const User = require("../users/userModel");
const Meal = require("./mealModel");
const Food = require("../food/foodModel")


module.exports = {
  addMeal: async (req, res) => {
    try {
      let foundUser = await User.findById(req.body.userId); //---------------find user     
      let newMeal = new Meal({
        // userId: req.body.userId,
        mealType: req.body.mealType,
        food: []
      });
      let savedNewMeal = await newMeal.save();

      await foundUser.meals.push(savedNewMeal); //the food array is in userModel
      await foundUser.save();

      res.status(200).json({ savedNewMeal, foundUser });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  viewMeals: async (req, res) => {

    try {
      let allUserMeals = await User.findById(req.params.id)
        .populate("meals")
        .select("-password -__v") // exclude  version
      // .exec("-__v");

      res.status(200).json(allUserMeals.meals).send(allUserMeals.meals);
    } catch (error) {
      console.log("err", error);
      res.status(500).json(error);
    }
  },

  editMeal: async (req, res) => {
    let editMeal = await Meal.findByIdAndUpdate(
      req.body.mealId,
      {mealType: req.body.mealType}
    )
    editMeal.save()
    res.send(editMeal)
  },

  deleteMeal: async (req, res) => {
    try {
      let deletedByID = await Meal.findByIdAndRemove(req.params.id);

      res.status(200).json(deletedByID);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  addFood: async (req, res) => {
    try {
      let foundUser = await User.findById(req.body.userId)
      let foundMeal = await Meal.findById(req.body.mealId); //---------------find user
      let newFood = await new Food({
        name: req.body.name,
        cal: req.body.cal,
      })

      let saveNewFood = newFood.save()

      let foodArray = foundMeal.food
      foodArray.push(newFood)

      foundMeal.save()
      foundUser.save()

      res.status(200).json({ saveNewFood, foundMeal, foundUser });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  editFood: async (req, res) => {
    try {
      // let foundUser = await User.findById(req.body.userId)
      // let foundMeal = await foundMeal.findById(req.body.mealId)
      let foundFood = await Food.findByIdAndUpdate(
        req.body.foodId,
        {
          name: req.body.name,
          cal: req.body.cal
        })
      // foundUser().save
      // foundMeal().save
      res.send(foundFood)
      res.status(200).json(foundFood)
    } catch (err) {
      res.status(500).json(error)
    }
  },

  deleteFood: async (req, res) => {
    try {
      let foundMeal = await Meal.findById(req.body.mealId)
      // let deletedFood = await Meal.findById(req.body.foodId)
      let filterFoodArray = await foundMeal.food.filter(id => id.toString() !== req.body.foodId)
      foundMeal.food = filterFoodArray
      await foundMeal.save()
      await Food.findByIdAndDelete(req.body.foodId)
      // res.send(req.body.foodId)
      res.json({
        foundMeal: foundMeal,
        filterFoodArray: filterFoodArray,
        // deletedFood: deletedFood
      })

    } catch (err) {
      res.status(500).json(error)
    }
  }
}
  ;


// ========================================= PREM VERSION =========================================
// const User = require("../users/userModel");
// const Meal = require("./mealModel");

// module.exports = {
//   addMeals: async (req, res) => {
//     console.log(req);

//     try {
//       let id = req.body.userId;
//       let mealType = req.body.meals[0].mealType;
//       let name = req.body.meals[0].food[0].name;
//       let cal = req.body.meals[0].food[0].cal;

//       let foundUser = await User.findById(id); //---------------find user

//       let newMeal = new Meal({
//         meals: [
//           {
//             mealType: mealType,
//             food: [
//               {
//                 name: name,
//                 cal: cal,
//               },
//             ],
//           },
//         ],
//         userId: id,
//       });

//       let savedNewMeal = await newMeal.save();
//       console.log(savedNewMeal);

//       // let findMealUser = await Meal.findById(req.body.userId)

//       // console.log(findMealUser);

//       await foundUser.meals.push(savedNewMeal); //the food array is in userModel
//       await foundUser.save();

//       // foundUser.meals.map((item)=>
//       // console.log(item))
//       res.status(200).json(savedNewMeal);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   },

//   viewMeals: async (req, res) => {
//     // console.log(req.body)

//     try {
//       const id = req.params.id;
//       console.log(req.params.id);
//       let allUserMeals = await User.findById(id)
//       .populate("meals")
//       .exec();
//       // console.log(allUserMeals);

//       res.status(200).json(allUserMeals.meals);
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
// // console.log(Meal)
//     try {
//       let deletedByID = await Meal.findByIdAndRemove(req.params.id);

//       res.status(200).json(deletedByID);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   },
// };
