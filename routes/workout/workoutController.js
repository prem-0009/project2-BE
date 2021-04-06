const User = require("../users/userModel");
const Workout = require("./workoutModel");


// workouts: [
//     { name: "Jumping Jack", cal: 100, id: uuidv4() },
//     { name: "Squat", cal: 30, id: uuidv4() },
// ],

module.exports = {
  addMeals: async (req, res) => {
    console.clear();
    // console.log(req.body)

    try {
      let id = req.body.user_id;
      
      let name = req.body.name;
      let cal = req.body.cal;



      let foundUser = await User.findById(id); //---------------find user

        let newWorkout = new Workout({
            name:name,
            cal:cal,
            user_id:id
        })
        let savedWorkout = await newWorkout.save()
        console.log(savedWorkout)

      console.log(foundUser);

      await foundUser.workouts.push(savedWorkout); //the food array is in userModel
      await foundUser.save(savedWorkout);

      res.status(200).json(savedWorkout);
    } catch (error) {
      res.status(500).json(error);
    }
  },

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
};
