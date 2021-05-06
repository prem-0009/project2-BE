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
      let allMeals = await User
        .findById(req.params.id)
        .populate('meals') 
        // .select("-password -__v")

      res.status(200).send(allMeals);
    } catch (error) {
      console.log("err", error);
      res.status(500).json(error);
    }
  },

  editMeal: async (req, res) => {
    let editMeal = await Meal.findByIdAndUpdate(
      req.body.mealId,
      { mealType: req.body.mealType }
    )
    editMeal.save()
    res.send(editMeal)
  },

  deleteMeal: async (req, res) => {
    console.clear()
    console.log('req.query.userId ===========================', req.query)
    
    // try {
    //   let deletedByID = await Meal.findByIdAndRemove(req.params.id);

    //   res.status(200).json(deletedByID);
    // } catch (error) {
    //   console.log(error);
    //   res.status(500).json(error);
    // }
  },

  addFood: async (req, res) => {
    try {
      let foundMeal = await Meal.findById(req.body.mealId)

      let newFood = {
        id: req.body.id,
        name: req.body.name,
        cal: req.body.cal,
      }

      await foundMeal.food.push(newFood)
      await foundMeal.save()

      res.status(200).json(foundMeal);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // editFood: async (req, res) => {
  //   try {
  //     let foundMeal = await Meal.findById(req.body.mealId)
  //     foundMeal.food.map(item => {
  //       if (item.id === req.body.foodId) {
  //         return {
  //           ...item,
  //           name: req.body.name,
  //           cal: req.body.cal
  //         }
  //       } else { return item }
  //     })

  //     await foundMeal.save()
  //     res.status(200).json(foundMeal);
  //   }
  //   catch (e) {
  //     res.status(500).json(error);
  //   }

  // }
}




  // editFood: async (req, res) => {
  //   try {
  //     // let foundUser = await User.findById(req.body.userId)
  //     // let foundMeal = await foundMeal.findById(req.body.mealId)
  //     let foundFood = await Food.findByIdAndUpdate(
  //       req.body.foodId,
  //       {
  //         name: req.body.name,
  //         cal: req.body.cal
  //       })
  //     // foundUser().save
  //     // foundMeal().save
  //     res.send(foundFood)
  //     res.status(200).json(foundFood)
  //   } catch (err) {
  //     res.status(500).json(error)
  //   }
  // },

  // deleteFood: async (req, res) => {
  //   try {
  //     let foundMeal = await Meal.findById(req.body.mealId)
  //     // let deletedFood = await Meal.findById(req.body.foodId)
  //     let filterFoodArray = await foundMeal.food.filter(id => id.toString() !== req.body.foodId)
  //     foundMeal.food = filterFoodArray
  //     await foundMeal.save()
  //     await Food.findByIdAndDelete(req.body.foodId)
  //     // res.send(req.body.foodId)
  //     res.json({
  //       foundMeal: foundMeal,
  //       filterFoodArray: filterFoodArray,
  //       // deletedFood: deletedFood
  //     })

  //   } catch (err) {
  //     res.status(500).json(error)
  //   }
  // }
// }



