const User = require("../users/userModel");
const Meal = require("./mealModel");

module.exports = {
  addMeals: async (req, res) => {
    console.clear();

    try {
      let id = req.body.user_id;
      let mealType = req.body.meals[0].mealType;
      let name = req.body.meals[0].food[0].name;
      let cal = req.body.meals[0].food[0].cal;

      let foundUser = await User.findById(id); //---------------find user

      let newMeal = new Meal({
        meals: [
          {
            mealType: mealType,
            food: [
              {
                name: name,
                cal: cal,
              },
            ],
          },
        ],
        user_id: id,
      });

      let savedNewMeal = await newMeal.save();
      console.log(savedNewMeal);

      // let findMealUser = await Meal.findById(req.body.user_id)

      // console.log(findMealUser);

      await foundUser.meals.push(savedNewMeal); //the food array is in userModel
      await foundUser.save();

      // foundUser.meals.map((item)=>
      // console.log(item))
      res.status(200).json(savedNewMeal);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  viewMeals: async (req, res) => {
    // console.log(req.body)

    try {
      const id = req.params.id;
      console.log(req.params.id);
      let allUserMeals = await User.findById(id)
      .populate("meals")
      .exec();
      // console.log(allUserMeals);

      res.status(200).json(allUserMeals.meals);
    } catch (error) {
      console.log("err", error);
      res.status(500).json(error);
    }
  },

  deleteByID: async (req, res) => {
    console.clear()
    // const _id = req.params.id;
    console.log(req.params.id);
    // console.log(id);
// console.log(Meal)
    try {
      let deletedByID = await Meal.findByIdAndRemove(req.params.id);

      res.status(200).json(deletedByID);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};
