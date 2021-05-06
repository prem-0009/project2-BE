// ========================================= MILEY VERSION =========================================
const User = require("../users/userModel");


module.exports = {
  updateMeals: async (req, res) => {
    // console.clear()
    // console.log('req.body.userId==================================',req.body.userId)
    // console.log('req.body.meals==================================',req.body.meals)
    try {
      let foundUser = await User.findById(req.body.userId); //---------------find user     
      foundUser.meals = req.body.meals
      foundUser.save()

      res.status(200).json({ foundUser });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  
  showAllData: async (req, res) => {
    try {
      let foundUser = await User.findById(req.params.id)
      res.status(200).send(foundUser);
    } catch (error) {
      console.log("err", error);
      res.status(500).json(error);
    }
  },


  updateWorkout: async (req, res) => {
    console.clear()
    console.log('req.body.userId==================================',req.body.userId)
    console.log('req.body.workouts==================================',req.body.workouts)
    try {
      let foundUser = await User.findById(req.body.userId); //---------------find user     
      foundUser.workouts = req.body.workouts
      foundUser.save()

      res.status(200).json({ foundUser });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  

  

  


}


