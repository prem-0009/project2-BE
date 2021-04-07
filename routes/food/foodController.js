// ========================================= MILEY VERSION =========================================
const User = require("../users/userModel");
const Meal = require("../meals/mealModel");
const Food = require("./foodModel")


module.exports = {

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

      let filterFoodArray = await foundMeal.food.filter(id => id.toString() !== req.body.foodId)
      foundMeal.food = filterFoodArray
      await foundMeal.save()
      await Food.findByIdAndDelete(req.body.foodId)

      res.json({
        foundMeal: foundMeal,
        filterFoodArray: filterFoodArray,
      })

    } catch (err) {
      res.status(500).json(error)
    }
  }
}


